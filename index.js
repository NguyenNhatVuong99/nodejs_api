let express = require("express")
let app = express()
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
let port = process.env.DB_PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/routers/auth")(app)
app.listen(port)
console.log(`server running http://127.0.0.1:${port}`);