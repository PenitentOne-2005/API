import { Router } from "express";
import {
  getFilms,
  getPopularFilms,
  getNewestFilms,
} from "../controllers/filmsController.js";

const filmsRouter = Router();

filmsRouter.get("/films", getFilms);
filmsRouter.get("/popular-films", getPopularFilms);
filmsRouter.get("/newest-films", getNewestFilms);

export default filmsRouter;
