import { films, popularFilms, newestFilms } from "../data.js";

export const getFilms = (req, res) => res.json(films);
export const getPopularFilms = (req, res) => res.json(popularFilms);
export const getNewestFilms = (req, res) => res.json(newestFilms);
