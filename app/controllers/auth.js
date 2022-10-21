const { response } = require("express")
let User = require("../models/user")
exports.index=(req,res)=>{
	User.index((response)=>{
		res.send({data:response})
	})
}
exports.login=(req,res)=>{
	User.login(req.body,(response)=>{
		if(!response.error){
			res.send({status:200,message:"Đăng nhập thành công"})
		}else{
			res.send({status:400,message:response.message})
		}
	})
}
exports.register=(req,res)=>{
	User.register(req.body,(response)=>{
		if(!response.error){
			res.send({status:200,message:"Đăng ký thành công"})
		}else{
			res.send({status:400,message:response.err.sqlMessage})
		}
	})

}
exports.store=(req,res)=>{
	User.store(req.body,(response)=>{
		res.send({data:response})
	})
}
