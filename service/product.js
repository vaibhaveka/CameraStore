(function(){
    var productService;
    var Product = require('../models/product');
    var Cart=require('../models/cart');

    productService=function(){};

    productService.getAll = async function(req,res){
        try{
            var products = await Product.find();
            res.status(200).send({data:products});
        }catch(err){
            res.status(400).send(err);
        }
    }

    productService.addToCart = async function(req,res){
        var userId =req.headers.userid;
        var productId =req.body.products;
        try{
            var user = await Cart.findOne({userId:userId});
            if(user){
                user.cart.push(productId);
                user.save();
            }else{
                user=Cart.create({userId:userId,cart:[productId]});
            }
            
            res.status(200).send({msg:{status:"success",data:user}});
        }catch(err){
            res.status(400).send(err);
        }
    }

    productService.getCartByUser = async function(req,res){
        var userId = req.headers.userid;
        try{
            var cart = await Cart.findOne({userId:userId});
            var products= await Product.find({id:{$in:cart.cart}});
            res.status(200).send({data:products});
        }catch(err){
            res.status(400).send(err);
        }
    }

    productService.addProduct = async function(req,res){

        try{
            var product=await Product.create(req.body);
            res.status(200).send({data:product});
        }catch(err){
            res.status(400).send(err);
        }
    }

    module.exports=productService;
}.call(this));