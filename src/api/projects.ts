import express from 'express';
import Projects from '../models/projects';

const router = express.Router();

router.get<{}, any>('/', async(req, res) => {
  const projects = await Projects.find().exec();
  res.json(projects);
});

export default router;
