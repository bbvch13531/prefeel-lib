import mongoose, { Schema } from 'mongoose';

const User = new Schema({
  displayName: String,
  email: String,
  password: String,
  o_auth: {
    facebook: {
      id: String,
      access_token: String
    },
    google: {
      id: String,
      access_token: String
    }
  }
});

export default mongoose.model('User', User);