import { tvShows } from "../data.js";

export const getTvShows = (req, res) => {
  res.json(tvShows);
};
