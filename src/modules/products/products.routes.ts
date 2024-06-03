import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

//call a controller

//create products
router.post('/api/products', productController.createProductController);

//get all products
router.get('/api/products', productController.allProductController);

//get single products
router.get(
  '/api/products/:productId',
  productController.getSingleProductController,
);
router.delete(
  '/api/products/:productId',
  productController.deleteSingleProductController,
);
router.put(
  '/api/products/:productId',
  productController.updateSingleProductconstroller,
);

export const productRoutes = router;
