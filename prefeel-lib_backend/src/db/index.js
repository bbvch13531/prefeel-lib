import mongoose from 'mongoose';

const {
  MONGO_URI: mongoURI
} = process.env;

export default (function () {
  mongoose.Promise = global.Promise;
  return {
    connect () {
      return mongoose.connect(mongoURI, {
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