import { ProductModel } from '@org/database';

export const getAllProducts = async () => {
  return await ProductModel.find().sort({ name: 1 });
};