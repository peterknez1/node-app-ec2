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

const sql = "CREATE TABLE tablename (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT)";
db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Table created successfully");
});

const sql2 = "INSERT INTO tablename (name, age) VALUES ?";

// Array of value sets
const values = [
  ['John Doe', 25],
  ['Jane Smith', 30],
  ['Bob Johnson', 35]
];

db.query(sql2, [values], (err, result) => {
  if (err) throw err;
  console.log(`${result.affectedRows} rows inserted successfully`);
});

app.listen(3000, () => console.log('Api running on port 3000.'));

app.get('/', (req, res) => res.json('My API running'));