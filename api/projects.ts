
import { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const filePath = join(process.cwd(), 'src/data/ongoingProjects.json');
    const data = readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(data);

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load projects' });
  }
}