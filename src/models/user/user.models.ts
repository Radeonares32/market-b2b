import { User } from './types/user.types'
import {Schema,model} from "mongoose";

const UserSchema = new Schema<User>({
    name:String,
    surname:String,
    email:String,
    password:String,
    image:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    cardLastName:{
        type:String,
        default:""
    },
    cardName:{
        type:String,
        default:""
    },
    cardNumber:{
        type:Number,
        default:0
    },
    cardCvv:{
        type:Number,
        default:0
    }
})
export const UserModel = model('User',UserSchema)