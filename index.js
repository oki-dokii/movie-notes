import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import moviesRouter from './routes/movies.js';

dotenv.config();
const app = express();
const port=3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', moviesRouter);

app.listen(port, () => {
  console.log(`🎬 Server running at http://localhost:${port}`);
});
