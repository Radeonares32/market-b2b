import { Handler } from "express";

//Models for testing
import { UserModel } from '../models/models'

export const getHome: Handler = (req, res) => {
    //@ts-ignore
    const admin = req.session.admin
    console.log(admin)
    if(admin) {
        res.render('admin/index',{admin})
    }
    else {
        res.redirect('/admin/sign?message=reqSign')
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
        req.session.admin = admin[0].email
        
        res.redirect('/admin')
    }
    else {
        res.redirect('/admin?message=noUser')
    }
}
export const getLogout:Handler = async (req,res) => {
    req.session.destroy(()=>{
        res.redirect('/admin/sign?message=sLogout')
    })
}