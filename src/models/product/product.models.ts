import { Product } from './types/product.types'
import {Schema,model} from "mongoose";

const ProductSchema = new Schema<Product>({
   productName:{
    type:String,
   },
   productDescription:{
    type:String
   },
   productPrice:{
    type:Number
   },
   productQuantity:{
    type:Number
   }
})
export const ProductModel = model('Product',ProductSchema)