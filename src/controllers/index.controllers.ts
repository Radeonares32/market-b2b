import { Handler } from 'express'
export const getHome:Handler = (req,res)  => {
      //@ts-ignore
      const user = req.session.user
      console.log(user)
    res.render('home/index')
}