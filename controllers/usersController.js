const usersController = {
    
    register: function (req,res) {
        res.render("users/register");
    },
    login:function (req,res) {
        res.render("users/login");
    },
    usersList:function (req,res) {
        res.render("users/usersList");
    }
}    
    
module.exports = usersController;



