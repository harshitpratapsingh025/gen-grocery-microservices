import { Express, Request } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { GatewayConfig } from '@org/config';
import { Logger } from '@org/utils';

const SERVICE_NAME = 'API-GATEWAY';

export const setupProxyRoutes = (app: Express, config: GatewayConfig) => {
  // Product Service Proxy
  app.use('/api/products', createProxyMiddleware({
    target: config.productServiceUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api/products': ''
    },
    on: {
      proxyReq: (proxyReq, req: Request) => {
        Logger.info(SERVICE_NAME, `${req.method} ${req.originalUrl} → Product Service`);
      },
      error: (err, req, res) => {
        Logger.error(SERVICE_NAME, 'Product Service Error', err.message);
        (res as any).status(503).json({
          success: false,
          message: 'Product service unavailable',
          error: err.message
        });
      }
    }
  }));

  // Cart Service Proxy
  app.use('/api/cart', createProxyMiddleware({
    target: config.cartServiceUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api/cart': ''
    },
    on: {
      proxyReq: (proxyReq, req: Request) => {
        Logger.info(SERVICE_NAME, `${req.method} ${req.originalUrl} → Cart Service`);
        // Re-stream parsed body for POST requests
        if (req.body && (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH')) {
          const bodyData = JSON.stringify(req.body);
          proxyReq.setHeader('Content-Type', 'application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
        }
      },
      error: (err, req, res) => {
        Logger.error(SERVICE_NAME, 'Cart Service Error', err.message);
        (res as any).status(503).json({
          success: false,
          message: 'Cart service unavailable',
          error: err.message
        });
      }
    }
  }));
};