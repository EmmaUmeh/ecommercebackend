import express, { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose'
import "dotenv/config";
const dbconfigurl = require('./config/db.config')

const login = require('./routes/login')

const app : Express = express();
const port = process.env.PORT;
app.use(express.json())

const connectDB = async () => {
  const connection = await mongoose.connect(dbconfigurl.url);
  console.log(`Mongo db connected:`, connection.connection.host);
};
connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send("Hello")
})

// Import the routes
app.use('/', login)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})