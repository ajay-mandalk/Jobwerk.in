// src/config/middleware.ts

import { Env } from '../.astro/types.d.ts';
interface Env {
  [key: string]: any;
}

interface MiddlewareSettings {
  cors: {
    enabled: boolean;
    origin: string[];
  };
}

module.exports = ({ env }: { env: Env }): { settings: MiddlewareSettings } => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000'], // Replace with your frontend URL
    },
  },
});