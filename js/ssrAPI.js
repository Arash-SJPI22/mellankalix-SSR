import fetch from "node-fetch";

const API_URL = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getAllMovies() {
    const res = await fetch(API_URL + "/movies");
    const data = await res.json();

    return data.data;
}

export async function getOneMovie(id) {
    const res = await fetch(API_URL + "/movies/" + id);
    const data = await res.json();

    return data.data;
}