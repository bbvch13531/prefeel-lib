import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import api from './api';
import db from './db';

// load environment variables
const {
  PORT: port,
  MONGO_URI: mongoURI
} = process.env;

const app = express();

/* SETUP MIDDLEWARE */
app.use(bodyParser.json());

app.use('/api', api);

db.connect();

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});
