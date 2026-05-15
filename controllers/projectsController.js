import { projects } from "../data.js";

export const getProjects = (req, res) => {
  res.json(projects);
};

export const getProjectById = (req, res) => {
  const { id } = req.params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json(project);
};
