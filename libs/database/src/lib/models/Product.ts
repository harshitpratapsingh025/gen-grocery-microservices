import mongoose, { Schema, Document } from 'mongoose';
import { ProductCategory } from '@org/types';

export interface ProductDocument extends Document {
  name: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: Object.values(ProductCategory)
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: (v: string) => /^https?:\/\/.+/.test(v),
      message: 'Invalid image URL'
    }
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret: any) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  },
  toObject: {
    virtuals: true,
    transform: function(doc, ret: any) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

productSchema.virtual('id').get(function() {
  return this._id.toHexString();
});
export const ProductModel = mongoose.model('Product', productSchema);