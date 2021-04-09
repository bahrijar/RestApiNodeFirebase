
module.exports = (app) => {
	const test = require("../controllers/test.controller");

	var router = require("express").Router();

	// Retrieve all without condition
	router.get("/", test.findAll);

	app.use("/api/v1/test", router);
};
