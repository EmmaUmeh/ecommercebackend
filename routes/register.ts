import express from 'express'
import { register } from '../controllers/RegisterUser'


const app = express.Router();


app.post('/register', register)