import mongoose, { Schema } from 'mongoose';

let jsFile = new Schema({
  name: String
});

let Directory = new Schema({
  name: String,
  files: [jsFile]
});

Directory.add({folder: [Directory]});

export default mongoose.model('Project', Directory, 'Project');