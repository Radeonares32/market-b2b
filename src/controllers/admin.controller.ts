import { Handler } from "express";

export const getHome:Handler = (req,res) => {
    res.render('admin/index')
}
export const getSign:Handler = (req,res) => {
    res.render('admin/sign')
}