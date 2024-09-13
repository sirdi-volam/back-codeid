const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017/codeid';

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient
      .connect(URL)
      .then((client) => {
        console.log('Connected to DB');
        dbConnection = client.db();
        return cb();
      })
      .catch((e) => {
        return cb(e)
      })
  },
  getDb: () => dbConnection
};