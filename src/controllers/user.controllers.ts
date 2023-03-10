import { Handler } from 'express'

//Services
import { userServices } from '../services/services'

//Utility
import { Messages, Validitions } from '../utility/utility'

export const getSign: Handler = async (req, res) => {
    const { message }: any = req.query
    const messageService = new Messages.Message()
    res.render('home/signin', { message: messageService.Messages(message).userValidation })
}
export const getSignup: Handler = (req, res) => {
    //@ts-ignore
    const user = req.session.user
    const { message }: any = req.query
    const messageService = new Messages.Message()
    res.render('home/signup', { message: messageService.Messages(message).userValidation })
}
export const postSignup: Handler = async (req, res) => {
    const { name, surname, email, password, passwordRepeat } = req.body
    const passValid = new Validitions.Validitions().passwordValidation(password,passwordRepeat)
    if (passValid.isValid) {
        const User = new userServices.UserService(name, surname, email, password)
        await User.create()
        res.redirect('/sign?message=lsuccess')
    }
    else {
        res.redirect('/signup?message=noMatch')
    }
}
export const postSign: Handler = async (req, res) => {
    const { email, password, passwordRepeat } = req.body
    const User = new userServices.UserService("", "", email, password)
    const passwordValid = new Validitions.Validitions().passwordValidation(password,passwordRepeat)
    const user = await User.find()
    if(passwordValid.isValid) {
        if (user.length > 0) {
            res.redirect('/signup?message=alreadyUser')
        } else {
            const successUser = await User.sign(user[0].password)
            if (successUser.length > 0) {
                //@ts-ignore
                req.session.user = user[0].name
                res.redirect('/')
            }
            else {
                res.redirect('/sign?message=unknow')
            }
        }
    }
    else {
        res.redirect(`/sign?message=${passwordValid.type}`)
    }
    
}
export const getLogout: Handler = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/?message=logout')
    })
}