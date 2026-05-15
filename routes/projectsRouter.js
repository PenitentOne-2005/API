import { Router } from "express";
import {
  getProjects,
  getProjectById,
} from "../controllers/projectsController.js";

const projectsRouter = Router();

projectsRouter.get("/projects", getProjects);
projectsRouter.get("/projects/:id", getProjectById);

export default projectsRouter;
