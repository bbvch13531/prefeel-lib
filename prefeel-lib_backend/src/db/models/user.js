import mongoose, { Schema } from 'mongoose';

const User = new Schema({
  displayName: String,
  email: String,
  password: String
  /*
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
  */
});

User.statics.findUser = (email, password) => {
  User.find((err, v) => {
    if (err) return false;
    else if (v.email === email && v.password === password) {
      return v;
    } else {
      return false;
    }
  });
};

module.exports = mongoose.model('User', User, 'User');
// export default mongoose.model('User', User, 'User');