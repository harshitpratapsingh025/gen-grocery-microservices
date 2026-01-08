import { CartModel } from '@org/database';
import { AppError } from '@org/types';
import { getCartServiceConfig } from '@org/config';

const config = getCartServiceConfig();

export const getCart = async () => {
  return await CartModel.find().populate('productId').sort({ createdAt: -1 });
};

export const addToCart = async (productId: string, quantity: number) => {
  const currentCount = await CartModel.countDocuments();
  
  if (currentCount >= config.cartItemLimit) {
    throw new AppError(
      `Cart limit exceeded. Maximum ${config.cartItemLimit} items allowed.`,
      400,
      'CART_LIMIT_EXCEEDED'
    );
  }

  const existingItem = await CartModel.findOne({ productId });
  
  if (existingItem) {
    existingItem.quantity += quantity;
    return await existingItem.save();
  }

  const cartItem = new CartModel({ productId, quantity });
  return await cartItem.save();
};

export const removeFromCart = async (productId: string) => {
  const cartItem = await CartModel.findOneAndDelete({ productId });
  
  if (!cartItem) {
    throw new AppError('Cart item not found', 404);
  }

  return cartItem;
};

export const updateCartQuantity = async (productId: string, quantity: number) => {
  const cartItem = await CartModel.findOne({ productId });
  
  if (!cartItem) {
    throw new AppError('Cart item not found', 404);
  }

  cartItem.quantity = quantity;
  return await cartItem.save();
};