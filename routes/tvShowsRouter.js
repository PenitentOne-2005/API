import { Router } from "express";
import { getTvShows } from "../controllers/tvShowsController.js";

const tvShowsRouter = Router();

tvShowsRouter.get("/tv-shows", getTvShows);

export default tvShowsRouter;
