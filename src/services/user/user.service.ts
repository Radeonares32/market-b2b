import { UserModel } from '../../models/models'

import { decrypt,encrypt } from '../../middlewares/middleware'

class UserService {
    private _name: string;
    private _surname: string
    private _email: string
    private _password: string
    private _image?: string
    private _isAdmin?: boolean
    private _cardName?: string
    private _cardLastName?: string
    private _cardNumber?: number
    private _cardCvv?: number
    constructor(name: string, surname: string, email: string, password: string, image?: string, isAdmin?: boolean, cardName?: string, cardLastName?: string, cardNumber?: number, cardCvv?: number) {
        this._name = name
        this._surname = surname
        this._email = email
        this._password = password
        this._image = image
        this._isAdmin = isAdmin
        this._cardName = cardName
        this._cardLastName = cardLastName
        this._cardNumber = cardNumber
        this._cardCvv = cardCvv
    }
    public async find() {
        return await UserModel.find({email:this._email})
    }
    public async create() {
        const encData = await encrypt(this._password)
        await UserModel.create({name:this._name,surname:this._surname,email:this._email,password:encData})
    }
}