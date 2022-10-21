const db = require("../common/connect")
const { v4: uuidv4 } = require('uuid');
var bcrypt = require('bcryptjs');

const User = (user) => {
	this.id = user.id;
	this.full_name = user.full_name;
	this.email = user.email;
	this.password = user.password;
}
User.index = (callback) => {
	let sql = 'select * from users'
	db.query(sql, (err, result) => {
		if (err) callback(err)
		callback(result)
	})
}
User.login = (data, callback) => {
	let email = data.email;
	let password = data.password;
	if(email && password){
		let sql = "select * from users where email= ?"
		db.query(sql, data.email, (err, data) => {
			if (err) callback(err)
			if (data.length == 0) callback({ error: true, message: "Email không đúng" })
			else {
				let hash = bcrypt.hashSync(password, 10);
				if (!bcrypt.compareSync(data[0].password, hash)) {
					callback({ error: true, message: "Password không đúng" })
					return
				}
				callback({ error: false, data })
			}
		})
	}
	else{
		callback({ error: true, message: "Vui lòng nhập dữ liệu" })
	}
	
}
User.register = (data, callback) => {
	let obj = {
		id: uuidv4(),
		full_name: data.full_name,
		email: data.email,
		password: bcrypt.hashSync(data.password, 8)
	}
	let sql = "insert into users set ?"
	db.query(sql, obj, (err, response) => {
		if (err) callback({ error: true, err })
		callback({ error: false, response })
	})
}
module.exports = User