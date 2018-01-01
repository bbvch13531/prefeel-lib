const mongoose = require('mongoose');

const {
  MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {
  return {
    connect () {
      mongoose.createConnection(mongoURI, {
        useMongoClient: true
      }).then(
        () => {
          console.log('Successfully connected to mongodb');
        }
      ).catch(
        err => {
          console.error(err);
        }
      );
    }
  };
})();