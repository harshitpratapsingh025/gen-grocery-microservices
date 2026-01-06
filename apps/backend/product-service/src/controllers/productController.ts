import { Request, Response, NextFunction } from 'express';
import { ResponseFormatter } from '@org/utils';
import * as productService from '../services/productService';

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productService.getAllProducts();
    res.json(ResponseFormatter.success(products, 'Products fetched successfully'));
  } catch (error) {
    next(error);
  }
};