import mongoose, { Schema } from 'mongoose';

let FileInfo = new Schema({
  fileName: String,
  content: String
});

let DirectoryInfo = new Schema({
  directoryName: String,
  file: [FileInfo]
});

DirectoryInfo.add({directory: [DirectoryInfo]});

export default mongoose.model('Project', DirectoryInfo, 'Project');