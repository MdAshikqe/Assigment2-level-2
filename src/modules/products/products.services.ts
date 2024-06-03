import { Products } from './products.interface';
import { productsModel } from './products.model';

const createProductsDB = async (products: Products) => {
  const result = await productsModel.create(products);
  return result;
};

const getAllProductDB = async () => {
  const result = await productsModel.find();
  return result;
};

const getSingleProdcutsDB = async (id: string) => {
  const result = await productsModel.findById(id);
  return result;
};

const updateSingleProductDB = async (id: string, upddatField: object) => {
  const result = await productsModel.findByIdAndUpdate(id, upddatField, {
    new: true,
  });
  return result;
};

const deleteSingleProductDB = async (id: string) => {
  const result = await productsModel.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductsDB,
  getAllProductDB,
  getSingleProdcutsDB,
  updateSingleProductDB,
  deleteSingleProductDB,
};
