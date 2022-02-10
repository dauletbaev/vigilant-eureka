import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), 'uploads')));

const mongoUri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/test';

mongoose.connect(mongoUri).catch((err) => {
  console.error(err);
  process.exit(1);
});

import auth from './routes/auth.mjs';
import upload from './routes/upload.mjs';
import building from './routes/building.mjs';
import errorHandler from './errors/index.mjs';
import swagger from './routes/swagger.mjs';

// Redirect to Swagger UI
app.get('/', async (_, res) => res.redirect('/docs'));

app.use(auth);
app.use(upload);
app.use(building);
app.use(swagger);
app.use(errorHandler);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
