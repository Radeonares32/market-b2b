import { Handler } from 'express'

//Services
import { userServices } from '../services/services'

export const getSign: Handler = async (req, res) => {
    res.render('home/signin')
}
export const getLogin: Handler = (req, res) => {
     //@ts-ignore
    const user = req.session.user
    console.log(user)
    res.render('home/login')
}
export const postLogin: Handler = async (req, res) => {
    const { name, surname, email, password, passwordRepeat } = req.body
    if (password === passwordRepeat) {
        const User = new userServices.UserService(name, surname, email, password)
        await User.create()
        res.redirect('/sign?message=lsuccess')
    }
    else {
        res.redirect('/login?message=noMatch')
    }
}
export const postSign: Handler = async (req, res) => {
    const { email, password } = req.body
    const User = new userServices.UserService("", "", email, password)
        const user = await User.find()
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
export const getLogout:Handler = (req,res) => {
    req.session.destroy(()=>{
        res.redirect('/?message=logout')
    })
}