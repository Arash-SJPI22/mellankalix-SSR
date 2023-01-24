import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get(["/", "/about", "/barAndBistro", "/comingPremieres"], (req, res) => {
	if (req.url == "/") {
        res.render("index");
    } else {
        res.render(req.url.slice(1));
    }
});

app.use("/", express.static("./"));

app.listen(5080);
