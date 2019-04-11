import mongoose from 'mongoose';
const Schema = mongoose.Schema

const ProductsNameSchema = new Schema({
  caseA: String,
  caseB: String,
  caseC: String
})

export default mongoose.model('name', ProductsNameSchema);
