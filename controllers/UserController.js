import {Router} from "express";
import UserService from "../services/UserService.js";
import BcryptService from "../services/BcryptService.js";

export const routerUser = Router()

const userService = () =>{
    return new UserService()
}

const service = userService()

routerUser.post('/create',async (req, res) =>{
    const {nome, password, email} =await req.body
    const passwordHash = await BcryptService.hash(password)
    await service.Create(nome, email, passwordHash)
    res.redirect('/login')
})

routerUser.post('/login',async (req, res)=>{
    const {email, password} = await req.body
    const user = await service.SelectOne(email)
    console.log(user);
    if (user.email == email && await BcryptService.compare(password, user.password)) {
        req.session.usuario = user
        res.redirect('/')
    }
})