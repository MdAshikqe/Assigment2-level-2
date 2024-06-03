import { Schema, model } from 'mongoose';
import { Products } from './products.interface';

// Define schema for Products
const productSchema = new Schema<Products>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
    trim: true,
  },
  variants: [
    {
      type: {
        type: String,
        required: true,
        trim: true,
      },
      value: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      trim: true,
    },
  },
});
// //query middleWare/hook
// productSchema.pre('find', function(next){
//     this.find({isDeleted:{$ne:true}})

//     next();

//   })
//   productSchema.pre('updateOne', function(next){
//     this.updateOne({isUpdated:{$ne:true}})
//     next();

//   })
// //aggigate
// productSchema.pre('aggregate', function(next){
//     this.pipeline().unshift({$match:{isDeleted:{$ne:true}}})

//      next();

//    })

export const productsModel = model<Products>('Product', productSchema);
