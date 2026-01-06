import { CartModel } from '@org/database';
import { AppError } from '@org/types';
import { getCartServiceConfig } from '@org/config';

const config = getCartServiceConfig();

export const getCart = async () => {
  return await CartModel.find().sort({ createdAt: -1 });
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

export const removeFromCart = async (id: string) => {
  const cartItem = await CartModel.findByIdAndDelete(id);
  
  if (!cartItem) {
    throw new AppError('Cart item not found', 404);
  }

  return cartItem;
};