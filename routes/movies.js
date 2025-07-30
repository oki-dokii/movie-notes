import express from 'express';
import axios from 'axios';
import pool from '../db/index.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const OMDB_API_KEY = process.env.OMDB_API_KEY;

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/search',async(req,res)=>{
    const { movieInput } = req.body;
    try{
        const isId=movieInput.startsWith('tt');
        const url = `http://www.omdbapi.com/?${isId ? 'i' : 't'}=${movieInput}&apikey=${OMDB_API_KEY}`;
        const response = await axios.get(url);
        const movie = response.data;
            if (movie.Response === 'False') {
                 return res.send('Movie not found!');

                
    }
    res.render('add', { movie });

    }
    catch (err) {
    console.error(err);
    res.status(500).send('Error fetching movie info');
  }
});

router.post('/add',async(req,res)=>{
    const { imdbID, title, poster, rating, watched_date, review } = req.body;
     try {
    await pool.query(
      'INSERT INTO movies (imdb_id, title, poster, rating, watched_date, review) VALUES ($1, $2, $3, $4, $5, $6)',
      [imdbID, title, poster, rating, watched_date, review]
    );
    res.redirect('/movies'); } catch (err) {
    console.error(err);
    res.status(500).send('Error saving movie to database');
  }
});

router.get('/movies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies ORDER BY watched_date DESC');
    res.render('movies', { movies: result.rows }); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading saved movies');
  }
});

router.post('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM movies WHERE id = $1', [id]);
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting movie');
  }
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    const movie = result.rows[0];
    res.render('edit', { movie });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading movie for edit');
  }
});

router.post('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const { rating, watched_date, review } = req.body;
  try {
    await pool.query(
      'UPDATE movies SET rating = $1, watched_date = $2, review = $3 WHERE id = $4',
      [rating, watched_date, review, id]
    );
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating movie');
  }
});


export default router;