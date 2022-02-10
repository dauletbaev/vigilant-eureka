const title = 'Express API with Swagger';
const version = '0.1'
const description = 'A simple Express API with Swagger';

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title,
      version,
      description,
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
    './src/routes/building.mjs',
  ],
};
