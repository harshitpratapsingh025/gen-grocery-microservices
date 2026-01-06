import mongoose, { Schema, Document } from 'mongoose';
import { CartItem as ICartItem } from '@org/types';

export interface CartDocument extends ICartItem, Document {}

const cartSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product ID is required'],
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
    default: 1
  }
}, {
  timestamps: true
});

export const CartModel = mongoose.model('Cart', cartSchema);
