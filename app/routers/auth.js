let authController = require("../controllers/auth")
module.exports=(router)=>{
	router.get("/auth",authController.index);
	router.post("/auth/login",authController.login);
	router.post("/auth/register",authController.register);
}