import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { getServiceConfig } from '@org/config';
import { errorHandler } from '@org/middlewares';
import { Logger } from '@org/utils';
import { connectDB } from '@org/database';
import productRoutes from './routes/productRoutes';

const SERVICE_NAME = 'PRODUCT-SERVICE';
const app = express();
const config = getServiceConfig();

// Connect to MongoDB
if (config.mongoUri) {
  connectDB(config.mongoUri, SERVICE_NAME);
}

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Product Service is healthy',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
const server = app.listen(config.port, () => {
  Logger.info(SERVICE_NAME, `🛍️  Running on port ${config.port}`);
});

process.on('SIGTERM', () => {
  Logger.info(SERVICE_NAME, 'SIGTERM signal received');
  server.close(() => Logger.info(SERVICE_NAME, 'HTTP server closed'));
});