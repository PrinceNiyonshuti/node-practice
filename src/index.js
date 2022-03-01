/** @format */


import express from "express";

const server = express();

// default route
server.get("/", (req, res) => {
	res
		.status(200)
		.json({
			success: true,
			message: "You successfully landed on our Todo app API",
		});
});

server.use(express.json());


const port = 5000;

server.listen(port, () => {
	console.log("Server listening on port " + port);
});
