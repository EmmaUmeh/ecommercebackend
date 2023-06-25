import express, { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose'
import dotenv from "dotenv";
const app: Express = express();
import { login } from './controllers/User';
import { register } from './controllers/RegisterUser';
import { products } from './controllers/Products';

dotenv.config();

app.use(express.json())

const port = process.env.PORT || 4000;
mongoose.connect('mongodb://localhost:27017/ecommercedb', {})

  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.get('/', (req: Request, res: Response) => {
  res.send("Building an ecommerce api")
})

// Import the routes
app.use('/api', login);
app.use('/api', register)
app.use('/api', products)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})