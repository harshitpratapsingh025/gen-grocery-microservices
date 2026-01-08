import mongoose, { Schema, Document } from 'mongoose';

export interface CartDocument extends Document {
  productId: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const cartSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product ID is required'],
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
      default: 1,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret: any) {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: function (doc, ret: any) {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

cartSchema.virtual('id').get(function() {
  return this._id.toHexString();
});
export const CartModel = mongoose.model('Cart', cartSchema);
