import {model} from 'mongoose'
import { user } from '../models/UserModel.js'

export const UserModel = model('Users', user)


export default class UserService {
    async SelectAll() {
        const users = UserModel.find()
    }

    async Create(nome, email, password) {
        const newUser = new UserModel({
            nome:nome, 
            email:email,
            password:password
        })

        await newUser.save()
    }

    Delete(id) {
        UserModel.findByIdAndDelete(id).then(()=> console.log(`Usuário excluído com sucesso. id:${id}`)).catch(err => console.log(err))
    }

    SelectOne(id) {
        const user = UserModel.findOne({email:email})
        return user
    }

    Update(id, nome, email, password) {
        UserModel.findByIdAndUpdate(id, {
            nome,
            email,
            password
        }).then(()=>{
            console.log(`Dados do usuários com id: ${id} alterados`)
        })
    }
}

