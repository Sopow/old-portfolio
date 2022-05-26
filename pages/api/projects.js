import dbConnect from "../../utils/database"
import Project from "../../models/Project";

export default async function handler(req, res) {
  await dbConnect();
  const projects = await Project.find({})
  res.status(200).json({
    projects
  })
}