let mysql = require("mysql")
const dotenv = require('dotenv');  
dotenv.config({ path: 'env.default' });
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodejs_api',
});
// kết nối vào cơ sở dữ liệu
connection.connect((err) => {
	if (err) throw err
	console.log("connected");
});

module.exports = connection