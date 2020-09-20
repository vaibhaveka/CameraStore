(function(){
    var loginService;
    loginService = function(){};
    const User = require('../models/users');
    loginService.register = async function(req,res){
        let body=req.body;
        try{
            let email = body.email;
            let password  = body.password;
            const user = await User.create({
            email: email,
            password:password,
            name:req.body.name
            });
            res.status(200).send({data:user})
        }catch(err) {
            res.status(400).send({ error: err });
        }
    },
    loginService.login = async function(req,res){
        let body=req.body;
        try{
          let email = body.email;
          let password  = body.password;
          const user =  await User.findOne({email: email});
            if(user){
                if(user.password==password)
                    res.status(200).send({data:user,status:"successful"});
                else
                    res.status(400).send({msg:"wrong password",status:"failed"});
            }else{
                res.status(400).send({msg:"User not registered",status:"failed"});
            }
        }catch(err) {
          res.status(400).send({ error: err });
        }
      }
module.exports = loginService;
}.call(this))