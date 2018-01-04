import mongoose, { Schema } from 'mongoose';

const librarySchema = new Schema({
  name: String,
  description: String
});

export default mongoose.model('Library', librarySchema, 'Library');