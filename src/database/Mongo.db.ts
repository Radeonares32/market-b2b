import chalk from 'chalk'
import { connect } from 'mongoose'
import { dotenv } from '../configs/config'

//! Dotenv Config
dotenv.dotenvConf()
export const mongoConnect =  async () => {
    try {
        await connect(`mongodb+srv://admin:admin@cluster0.3gxnkct.mongodb.net/?retryWrites=true&w=majority`)
        /* await connect(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_DB_NAME}`) */

        console.log(chalk.blue("mongodb connected !!"))
    }
    catch(err) {
        console.log(err)
    }
}