import request from  "supertest";
import app from "../src/app.js";
import { getAllMovies } from "../src/ssrAPI.js";

const allMovies = await getAllMovies();

test("Is there a 404 page for incorrect movie id page", async () => {

    const randMovieID = Math.floor(Math.random() * (allMovies.length * 10)) + (allMovies.length + 1)

    const respons = await request(app)
    .get("/myMovie/" + randMovieID)
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(404);

    expect(respons.text.includes(`<h2>Aj aj aj, Grinchen har varit i farten</h2>`)).toBeTruthy();
});

test("Is there a 404 page for other pages", async () => {
    
    const randArr = ["kebab", "/", "fest", "kamel", "/", "mijau"];
    let randText = "";
    
    for(let i=0; i < 4; i++) {
        randText += randArr[Math.floor(Math.random() * 5)];
    }
    
    const respons = await request(app)
    .get("/" + randText)
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(404);

    expect(respons.text.includes(`<h2>Aj aj aj, Grinchen har varit i farten</h2>`)).toBeTruthy();

});