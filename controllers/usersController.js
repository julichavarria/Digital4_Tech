const usersController = {
    
    register: function (req,res) {
        res.render("users/register");
    },
    login:function (req,res) {
        res.render("users/login");
    }
}    
    
module.exports = usersController;



