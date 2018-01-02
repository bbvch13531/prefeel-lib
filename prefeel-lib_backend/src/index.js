import dotenv from 'dotenv';

// load environment variables
const {
  PORT: port,
  MONGO_URI: mongoURI
} = process.env;

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import api from './api';
import db from './db';

db.connect();
const app = express();

app.use('/api', api);

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});
