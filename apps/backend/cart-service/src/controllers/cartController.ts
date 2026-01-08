import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ResponseFormatter } from '@org/utils';
import * as cartService from '../services/cartService';

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cartItems = await cartService.getCart();
    res.json(ResponseFormatter.success(cartItems, 'Cart fetched successfully'));
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { productId, quantity } = req.body;
    const cartItem = await cartService.addToCart(productId, quantity);

    return res
      .status(201)
      .json(
        ResponseFormatter.success(cartItem, 'Item added to cart successfully')
      );
  } catch (error) {
    console.error('AddToCart error:', error);
    next(error);
  }
};

export const removeFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await cartService.removeFromCart(req.params.id);
    res.json(
      ResponseFormatter.success(null, 'Item removed from cart successfully')
    );
  } catch (error) {
    next(error);
  }
};

export const updateCartQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { quantity } = req.body;
    const cartItem = await cartService.updateCartQuantity(req.params.id, quantity);

    return res.json(
      ResponseFormatter.success(cartItem, 'Cart quantity updated successfully')
    );
  } catch (error) {
    next(error);
  }
};
