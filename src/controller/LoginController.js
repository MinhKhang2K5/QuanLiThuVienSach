class LoginController {
    Login(req, res, next){
        res.render('login');
    }
}

module.exports = new LoginController();
