import express from 'express'
import { products } from '../controllers/products';
// 
const app  = express.Router();


app.get('/products', products)