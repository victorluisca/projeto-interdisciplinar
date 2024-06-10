import {Router} from "express";
import UserService from "../services/UserService.js";

export const routerUser = Router()

const userService = () =>{
    return new UserService()
}

const service = userService()

routerUser.post('/create',async (req, res) =>{
    console.log(req.body);
    const {nome, password, email} =await req.body
    await service.Create(nome, email, password)
    res.redirect('/login')
})

routerUser.post('/login', (req, res)=>{
    const {email, password} = req.body
    service.SelectOne()
})