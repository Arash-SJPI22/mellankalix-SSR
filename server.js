import express from "express";
import { marked } from 'marked';
import { getOneMovie, getAllMovies } from "./js/ssrAPI.js";

const app = express();

app.set("view engine", "ejs");

app.get(["/", "/about", "/barAndBistro", "/comingPremieres", "/giftcertificate", "/movie", "/newsletter", "/open", "/placeholder", "/ticketInfo", "/tickets"], (req, res) => {
	if (req.url == "/") {
        res.render("index");
    } else {
        res.render(req.url.slice(1));
    }
});

app.get("/allMovies", async (req, res) => {
    const movieList = await getAllMovies();
    res.render("allMovies", { movieList });
});

app.get("/myMovie/:movieId", async (req, res) => {
    const movie = await getOneMovie(req.params.movieId);
    if (movie) {
        res.render("myMovie", { title: movie.attributes.title, intro: marked.parse(movie.attributes.intro), image: movie.attributes.image.url });
    } else {
        res.status(404).render("404");
    }
});

app.use("/", express.static("./"));

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(5080);
