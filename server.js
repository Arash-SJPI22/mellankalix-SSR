import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

app.use("/", express.static("./"));

app.listen(5080);
