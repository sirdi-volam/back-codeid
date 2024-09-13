const express = require('express')
const { connectToDb, getDb} = require('./app/config/db.config')

const PORT = 3000;

const app = express();

let db;

connectToDb((e) => {
  if (!e) {
    app.listen(PORT, (e) => {
      e ? console.log(e) : console.log(`Server running on port ${PORT}`)
    });
    db = getDb()
  } else {
    console.log(`DB connection error: ${e}`);
    
  }
})

