import express from 'express';
import Projects from '../models/projects';

const router = express.Router();

router.get<{}, any>('/', async(req, res) => {
  const projects = await Projects.findOne();
  res.json(projects);
});

export default router;
