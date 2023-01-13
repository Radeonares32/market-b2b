import { Handler } from 'express'
export const getHome:Handler = (req,res)  => {
      //@ts-ignore
      const user = req.session.user
      if(user) {
        res.render('home/index',{user})
      }
      else {
        res.render('home/index',{user})
      }
    
}