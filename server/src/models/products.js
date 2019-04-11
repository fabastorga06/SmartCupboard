import mongoose from 'mongoose';
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
  caseA: { product: String, quantity: String },
  caseB: { product: String, quantity: String },
  caseC: { product: String, quantity: String },
  date: { type: String, default: Date().toString().substring(0,21) }
})

export default mongoose.model('Products', ProductsSchema);
