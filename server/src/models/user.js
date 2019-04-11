import mongoose from 'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user: String,
  pass: String
})

export default mongoose.model('users', UserSchema);
