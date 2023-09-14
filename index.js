import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'proximapassword',
  database: 'wp'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.listen(3000, () => console.log('Api running on port 3000.'));

app.get('/', (req, res) => res.json('My API running'));
