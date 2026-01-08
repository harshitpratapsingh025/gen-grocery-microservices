import { Router } from 'express';
import { body } from 'express-validator';
import { getCart, addToCart, removeFromCart, updateCartQuantity } from '../controllers/cartController';

const router = Router();

const validateAddToCart = [
  body('productId').notEmpty().isMongoId().withMessage('Invalid Product ID'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

const validateUpdateQuantity = [
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

router.get('/', getCart);
router.post('/', validateAddToCart, addToCart);
router.put('/:id', validateUpdateQuantity, updateCartQuantity);
router.delete('/:id', (req, res, next) => {
  removeFromCart(req, res, next);
});

export default router;