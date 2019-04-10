import mongoose from 'mongoose';
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
    caseA: { product: String, quantity: String },
    caseB: { product: String, quantity: String },
    caseC: { product: String, quantity: String },
    date: { type: Date, default: Date.now }
})

export default mongoose.model('Products', ProductsSchema);
