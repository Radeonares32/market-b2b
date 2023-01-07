import { UserModel } from '../../models/models'

import { decrypt, encrypt } from '../../middlewares/middleware'

export class UserService {
    private readonly _name?: string;
    private readonly _surname?: string
    private readonly _email?: string
    private readonly _password?: string | any
    private readonly _image?: string
    private readonly _isAdmin?: boolean
    private readonly _cardName?: string
    private readonly _cardLastName?: string
    private readonly _cardNumber?: number
    private readonly _cardCvv?: number
    constructor(name?: string, surname?: string, email?: string, password?: string, image?: string, isAdmin?: boolean, cardName?: string, cardLastName?: string, cardNumber?: number, cardCvv?: number) {
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
        return UserModel.find({ email: this._email })
    }
    public async sign(hash: string) {
        const decData = await decrypt(this._password, hash)
        if (decData) {
            return  UserModel.find({ email: this._email, password: hash })
        }
        else {
            return []
        }

    }
    public async create() {
        const encData = await encrypt(this._password)
        await UserModel.create({ name: this._name, surname: this._surname, email: this._email, password: encData })
    }
}