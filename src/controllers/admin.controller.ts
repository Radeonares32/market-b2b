import { Handler } from "express";

export const getHome:Handler = (req,res) => {
    res.render('admin/index')
}