import {compareSync, hashSync} from 'bcrypt'


export default class BcryptService {
    static async compare(password, attempt){
        return compareSync(password, attempt)
    }

    static async hash(password) {
        return hashSync(password, 10)
    }
}