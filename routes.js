const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Landmeinacoolplace23$',
  database: 'immersiveapp'
});

function getAbout() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM about', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

app.get('/about', async (req, res) => {
  try {
    const aboutData = await getAbout();
    res.json(aboutData);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('API server is listening on port 3000');
});

function getMenu() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM menu', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  app.get('/menu', async (req, res) => {
    try {
      const menuData = await getMenu();
      res.json(menuData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });

  function getObjects() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM objects', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  app.get('/objects', async (req, res) => {
    try {
      const objectsData = await getObjects();
      res.json(objectsData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });

function getDescription() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM DESCRIPTION', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  app.get('/description', async (req, res) => {
    try {
      const descriptionData = await getDescription();
      res.json(descriptionData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });
  
function getImageMetadata() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM IMAGE_METADATA', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  app.get('/image_metadata', async (req, res) => {
    try {
      const imageData = await getImageMetadata();
      res.json(imageData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });
  
function getDescriptionText() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM DESCRIPTION_TEXT', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  app.get('/description_text', async (req, res) => {
    try {
      const descriptionTextData = await getDescriptionText();
      res.json(descriptionTextData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });
    