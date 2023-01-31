import request from  "supertest";
import app from "../src/app.js";
import { getOneMovie, getAllMovies } from "../src/ssrAPI.js";

test("Is the right movie displayed (checks title)", async () => {
    const allMovies = await getAllMovies(); 
    const movieID = Math.floor(Math.random() * allMovies.length) + 1;
    const movie = await getOneMovie(movieID);

    const respons = await request(app)
        .get("/myMovie/" + movieID)
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200);

    expect(respons.text.includes(`${movie.attributes.title}`)).toBeTruthy();

});
