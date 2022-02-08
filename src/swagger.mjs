export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Abat Dauletbaev',
        url: 'https://abat.me',
        email: 'abat.dauletbayev@gmail.com',
      },
    },
    servers: [
      { url: 'http://localhost:3000' },
      { url: 'http://localhost:8080' }
    ],
  },
  apis: [
    './src/routes/auth.mjs',
    './src/routes/upload.mjs',
  ],
};
