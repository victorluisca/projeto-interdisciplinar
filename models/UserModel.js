import {Schema} from 'mongoose'

export const user = new Schema({
    nome:String,
    email:String,
    password:String
})