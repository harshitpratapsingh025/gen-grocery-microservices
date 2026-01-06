import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { GatewayConfig } from '@org/config';
import { Logger } from '@org/utils';

const SERVICE_NAME = 'API-GATEWAY';

export const setupProxyRoutes = (app: Express, config: GatewayConfig) => {
  // Product Service Proxy
  app.use('/api/products', createProxyMiddleware({
    target: config.productServiceUrl,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      Logger.info(SERVICE_NAME, `${req.method} ${req.originalUrl} → Product Service`);
    },
    onError: (err, req, res) => {
      Logger.error(SERVICE_NAME, 'Product Service Error', err.message);
      (res as any).status(503).json({
        success: false,
        message: 'Product service unavailable',
        error: err.message
      });
    }
  }));

  // Cart Service Proxy
  app.use('/api/cart', createProxyMiddleware({
    target: config.cartServiceUrl,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      Logger.info(SERVICE_NAME, `${req.method} ${req.originalUrl} → Cart Service`);
    },
    onError: (err, req, res) => {
      Logger.error(SERVICE_NAME, 'Cart Service Error', err.message);
      (res as any).status(503).json({
        success: false,
        message: 'Cart service unavailable',
        error: err.message
      });
    }
  }));
};