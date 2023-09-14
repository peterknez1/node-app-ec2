import express from 'express';

const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'proximapassword',
  database: ''
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.listen(3000, () => console.log('Api running on port 3000.'));

app.get('/', (req, res) => res.json('My API running'));