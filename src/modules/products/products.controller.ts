import { Request, Response } from 'express';
import { productServices } from './products.services';
import zodProductSchemaValidation from './product.zod.validation';

//create a product
const createProductController = async (req: Request, res: Response) => {
  try {
    const { product: productsData } = req.body;
    const zodParseData = zodProductSchemaValidation.parse(productsData);
    const result = await productServices.createProductsDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

//find all product
const allProductController = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: 'Emty Product',
      error: err,
    });
  }
};

//find by id single product
const getSingleProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProdcutsDB(productId);
    res.status(200).json({
      succes: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: 'Error fetching product',
      error: err,
    });
  }
};

//delete single id
const deleteSingleProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteSingleProductDB(productId);
    res.status(200).json({
      succes: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: 'Error fetching product',
      error: err,
    });
  }
};

//update product single
const updateSingleProductconstroller = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.updateSingleProductDB(
      productId,
      req.body,
    );
    res.status(200).json({
      succes: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: 'Error fetching product',
      error: err,
    });
  }
};

export const productController = {
  createProductController,
  allProductController,
  getSingleProductController,
  deleteSingleProductController,
  updateSingleProductconstroller,
};
