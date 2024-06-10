

export default class LoginMiddlware {
    static isLoggedIn() {
        return (req,res,next) =>{
            if (req.session.usuario) {
                next()
            } else {
                res.redirect('/login')
            }
        }
    }
}