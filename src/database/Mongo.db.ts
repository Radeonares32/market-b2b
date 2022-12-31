import { connect } from 'mongoose'
import { dotenv } from '../configs/config'

//! Dotenv Config
dotenv.dotenvConf()

export const mongoConnect =  async () => {
    try {
        await connect(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_DB_NAME}`)
    }
    catch(err) {
        console.log(err)
    }
}

