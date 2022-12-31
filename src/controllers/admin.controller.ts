import { Handler } from "express";

export const getHome:Handler = (req,res) => {
    res.render('admin/index')
}
export const getSign:Handler = (req,res) => {
    res.render('admin/sign')
}
export const postSign:Handler = (req,res) => {
    const {email,password} = req.body
    console.log(req.body)
}
