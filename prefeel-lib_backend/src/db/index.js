import mongoose from 'mongoose';

const {
  MONGO_URI: mongoURI
} = process.env;

export default (function () {
  return {
    connect () {
      return mongoose.createConnection(mongoURI, {
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
    },
    disconnect () {
      return mongoose.disconnect();
    }
  };
})();