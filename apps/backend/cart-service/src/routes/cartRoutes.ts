import { Router } from 'express';
import { body } from 'express-validator';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController';

const router = Router();

const validateAddToCart = [
  body('productId').notEmpty().isMongoId().withMessage('Invalid Product ID'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

router.get('/', getCart);
router.post('/', validateAddToCart, addToCart);
router.delete('/:id', removeFromCart);

export default router;