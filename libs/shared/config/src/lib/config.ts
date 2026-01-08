import { config } from 'dotenv';

config();

export interface ServiceConfig {
  port: number;
  mongoUri?: string;
  nodeEnv: string;
}

export interface GatewayConfig extends ServiceConfig {
  productServiceUrl: string;
  cartServiceUrl: string;
}

export interface CartServiceConfig extends ServiceConfig {
  productServiceUrl: string;
  cartItemLimit: number;
}

export const getServiceConfig = (): ServiceConfig => ({
  port: parseInt(process.env.PORT || '5000', 10),
  mongoUri: process.env.MONGODB_URI,
  nodeEnv: process.env.NODE_ENV || 'development'
});

export const getGatewayConfig = (): GatewayConfig => ({
  ...getServiceConfig(),
  ...getCartServiceConfig(),
  productServiceUrl: process.env.PRODUCT_SERVICE_URL || 'http://localhost:5001',
  cartServiceUrl: process.env.CART_SERVICE_URL || 'http://localhost:5002'
});

export const getCartServiceConfig = (): CartServiceConfig => ({
  ...getServiceConfig(),
  productServiceUrl: process.env.PRODUCT_SERVICE_URL || 'http://localhost:5001',
  cartItemLimit: parseInt(process.env.CART_ITEM_LIMIT || '10', 10)
});
