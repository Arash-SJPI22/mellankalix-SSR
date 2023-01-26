import request from  "supertest";
import app from "../js/app.js";
import { getOneMovie, getAllMovies } from "../js/ssrAPI.js";

test("Are all movies from the API displayed on index page (checkes title)", async () => {
    const allMovies = await getAllMovies();

    for (let movie of allMovies) {

        const respons = await request(app)
        .get("/")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200);

        expect(respons.text.includes(`<h3 class="current-movies-card-title">${movie.attributes.title}</h3>`)).toBeTruthy();
    
    };
    

});