import express from 'express'
import { products } from '../controllers/Products';
// 
const app  = express.Router();


app.get('/products', products)