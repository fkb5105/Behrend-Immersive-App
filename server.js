const express = require('express');
const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
  host: '146.186.8.211',
  user: 'root',
  password: 'Landmeinacoolplace23$',
  database: 'immersiveapp',
  port: 3306
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Initialize express app
const app = express();

// Define routes
app.get('/image_metadata', (req, res) => {
  let sql = 'SELECT * FROM image_metadata';
  let query = db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});


app.get('/objects', (req, res) => {
  let sql = 'SELECT * FROM objects';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

app.get('/about', (req, res) => {
  let sql = 'SELECT * FROM about';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

app.get('/description', (req, res) => {
  let sql = 'SELECT * FROM description';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

app.get('/description_text', (req, res) => {
  let sql = 'SELECT * FROM description_text';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

app.get('/gallery', (req, res) => {
  let sql = 'SELECT * FROM gallery';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
