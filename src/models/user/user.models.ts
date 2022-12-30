import { User } from './types/user.types'
import {Schema,model} from "mongoose";

const UserSchema = new Schema<User>({
    name:String,
    surname:String,
    email:String,
    password:String,
    image:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    cardLastName:String,
    cardName:String,
    cardNumber:Number,
    cardCvv:Number
})
export const UserModel = model('User',UserSchema)