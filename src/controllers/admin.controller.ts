import { Handler } from "express";

//Models for testing
import { UserModel } from '../models/models'

export const getHome: Handler = (req, res) => {
    //@ts-ignore
    const admin = req.session.admin
    if(admin) {
        res.render('admin/index')
    }
    else {
        res.redirect('/admin?message=reqSign')
    }
}
export const getSign: Handler = (req, res) => {
    res.render('admin/sign')
}
export const postSign: Handler = async (req, res) => {
    const { email, password } = req.body
    // testing
    const admin = await UserModel.find({ email, password })
    if(admin.length > 0) {
        //@ts-ignore
        req.session.admin = admin[0].name
        res.redirect('/admin')
    }
    else {
        res.redirect('/admin?message=noUser')
    }
}
