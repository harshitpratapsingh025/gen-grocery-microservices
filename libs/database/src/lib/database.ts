import mongoose from 'mongoose';
import { Logger } from '@org/utils';

export const connectDB = async (uri: string, serviceName: string): Promise<any> => {
  try {
    await mongoose.connect(uri);
    Logger.info(serviceName, '✅ MongoDB connected successfully');
  } catch (error) {
    Logger.error(serviceName, '❌ MongoDB connection failed', error);
    process.exit(1);
  }
};