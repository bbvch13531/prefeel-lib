import mongoose, { Schema } from 'mongoose';

let Files = new Schema({
  name: String
});

let Folder = new Schema({
  name: String,
  files: [Files]
});

Folder.add({folder: [Folder]});
// Folder.add({files: [Files]});

export default mongoose.model('Folder', Folder, 'Folder');