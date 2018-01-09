import User from './../../../db/models/user';
import crypto from 'crypto';

const { PASSWORD_HASH_KEY: secret } = process.env;

function hash (password) {
  return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

// GET /api/v1.0/auth
export const getEx = async (req, res) => {
  try {
    res.json({

    });
  } catch (err) {
    throw err;
  }
};

// POST /api/v1.0/auth
export const postEx = async (req, res) => {
  try {
    res.json({

    });
  } catch (err) {
    throw err;
  }
};

// DELETE /api/v1.0/auth
export const deleteEx = async (req, res) => {
  try {
    res.json({

    });
  } catch (err) {
    throw err;
  }
};

export const userSignIn = async (req, res) => {
  let result = { };

  if (!req.body.email || !req.body.password) {
    result.message = 'email or password have invalid value';
    res.status(200).json(result);
  } else {
    User.findOne({email: req.body.email}, (err, v) => {
      if (err) {
        result.message = 'database failure';
        res.status(500).json(result);
      } else {
        if (v.email === req.body.email && v.password === hash(req.body.password)) {
          result.message = 'sign in success';
          result.displayName = v.displayName;
          req.session.user_uid = v.id;
          res.status(200).json(result);
          // res.redirect('/');
        } else {
          result.message = 'email or password have invalid value';
          res.status(401).json(result);
        }
      }
    });
  }
};

export const userSignOut = async (req, res) => {
  let result = { };
  delete req.session.user_uid;
  result.message = 'sign out success';
  res.status(200).json(result);
};

export const userSignUp = async (req, res) => {
  let result = { };
  let user = new User();

  if (!req.body.email || !req.body.password) {
    result.message = 'email or password have invalid value';
    res.status(200).json(result);
  } else {
    user.displayName = req.body.displayName;
    user.email = req.body.email;
    user.password = hash(req.body.password);
    User.findOne({email: req.body.email}, (err, v) => {
      if (err) {
        result.message = 'database failure';
        res.status(500).json(result);
      } else {
        if (!v) {
          user.save(function (err) {
            if (err) {
              result.message = 'database failure';
              res.status(500).json(result);
            } else {
              result.message = 'sign up success';
              res.status(200).json(result);
            }
          });
        } else {
          result.message = 'this email is already member';
          res.status(401).json(result);
        }
      }
    });
  }
};