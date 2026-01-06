export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
  error?: string;
}

export interface Product {
  _id?: string;
  name: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductCategory {
  FRUITS = 'Fruits',
  VEGETABLES = 'Vegetables',
  DAIRY = 'Dairy',
  BAKERY = 'Bakery',
  MEAT = 'Meat',
  BEVERAGES = 'Beverages',
  SNACKS = 'Snacks',
  OTHER = 'Other'
}

export interface CartItem {
  _id?: string;
  productId: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AddToCartDto {
  productId: string;
  quantity: number;
}

export class AppError extends Error {
  statusCode: number;
  code?: string;

  constructor(message: string, statusCode: number, code?: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}