
// config/middlewares.ts
export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'script-src': ["'self'", "'unsafe-inline'", 'example.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'example.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://www.jobwerk.in'], // Replace with your frontend domain
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];