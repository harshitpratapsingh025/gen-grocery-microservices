import mongoose from 'mongoose';
import { ProductModel } from '../models/Product';
import { CartModel } from '../models/Cart';
import { productsSeedData } from './products.seed';
import { Logger } from '@org/utils';

const SERVICE_NAME = 'SEEDER';

export class DatabaseSeeder {
  static async connect(uri: string) {
    try {
      await mongoose.connect(uri);
      Logger.info(SERVICE_NAME, '✅ Connected to MongoDB');
    } catch (error) {
      Logger.error(SERVICE_NAME, '❌ MongoDB connection failed', error);
      process.exit(1);
    }
  }

  static async seedProducts() {
    try {
      Logger.info(SERVICE_NAME, '🌱 Seeding products...');
      
      // Clear existing products
      await ProductModel.deleteMany({});
      Logger.info(SERVICE_NAME, '🗑️  Cleared existing products');

      // Insert seed data
      const products = await ProductModel.insertMany(productsSeedData);
      Logger.info(SERVICE_NAME, `✅ Successfully seeded ${products.length} products`);
      
      return products;
    } catch (error) {
      Logger.error(SERVICE_NAME, '❌ Error seeding products', error);
      throw error;
    }
  }

  static async clearCart() {
    try {
      Logger.info(SERVICE_NAME, '🧹 Clearing cart...');
      await CartModel.deleteMany({});
      Logger.info(SERVICE_NAME, '✅ Cart cleared successfully');
    } catch (error) {
      Logger.error(SERVICE_NAME, '❌ Error clearing cart', error);
      throw error;
    }
  }

  static async clearAll() {
    try {
      Logger.info(SERVICE_NAME, '🧹 Clearing all data...');
      await ProductModel.deleteMany({});
      await CartModel.deleteMany({});
      Logger.info(SERVICE_NAME, '✅ All data cleared successfully');
    } catch (error) {
      Logger.error(SERVICE_NAME, '❌ Error clearing data', error);
      throw error;
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
    Logger.info(SERVICE_NAME, '👋 Disconnected from MongoDB');
  }
}