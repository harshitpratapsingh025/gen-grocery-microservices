import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { getGatewayConfig } from '@org/config';
import { errorHandler, notFoundHandler } from '@org/middlewares';
import { Logger } from '@org/utils';
import { setupProxyRoutes } from './proxy/routes';

const SERVICE_NAME = 'API-GATEWAY';
const app = express();
const config = getGatewayConfig();

// Security & Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Health Check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API Gateway is healthy',
    timestamp: new Date().toISOString()
  });
});

// Setup Proxy Routes
setupProxyRoutes(app, config);

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Graceful Shutdown
const server = app.listen(config.port, () => {
  Logger.info(SERVICE_NAME, `🚀 Running on port ${config.port}`);
  Logger.info(SERVICE_NAME, `📍 Product Service: ${config.productServiceUrl}`);
  Logger.info(SERVICE_NAME, `📍 Cart Service: ${config.cartServiceUrl}`);
});

process.on('SIGTERM', () => {
  Logger.info(SERVICE_NAME, 'SIGTERM signal received: closing HTTP server');
  server.close(() => {
    Logger.info(SERVICE_NAME, 'HTTP server closed');
  });
});