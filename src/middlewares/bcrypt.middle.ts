import { hash,compare } from 'bcrypt'
import { dotenv } from '../configs/config'

dotenv.dotenvConf()

export const encrypt = async (password:string) => {
    return await hash(password,Number(process.env.SALT))
   
}
export const decrypt =  async (password:string,hash:string) => {
   return await compare(password,hash)   
}
