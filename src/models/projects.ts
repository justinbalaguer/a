import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    projects: [{}],
});

const Projects = mongoose.model(
    "Projects",
    projectSchema,
    "projects"
);

export default Projects;
