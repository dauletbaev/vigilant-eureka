import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), 'uploads')));

import auth from './routes/auth.mjs';
import upload from './routes/upload.mjs';
import errorHandler from './errors/index.mjs';
import swagger from './routes/swagger.mjs'

app.use(auth);
app.use(upload);
app.use(swagger);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running http://localhost:3000');
});
