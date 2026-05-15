import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import filmsRouter from "./routes/filmsRouter.js";
import projectsRouter from "./routes/projectsRouter.js";
import tvShowsRouter from "./routes/tvShowsRouter.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(filmsRouter);
app.use(projectsRouter);
app.use(tvShowsRouter);

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Welcome to Custom API</h1>
      <p style="font-size: 20px;">Available endpoints:</p>
      <ul style="font-size: 18px; line-height: 2;">
        <li><a href="/projects">GET /projects</a></li>
        <li><a href="/projects/1">GET /projects/:id</a></li>
        <li><a href="/films">GET /films</a></li>
        <li><a href="/popular-films">GET /popular-films</a></li>
        <li><a href="/newest-films">GET /newest-films</a></li>
        <li><a href="/tv-shows">GET /tv-shows</a></li>
      </ul>
    </div>
  `);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
