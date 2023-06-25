import { Request, Response } from 'express'
import ProductModel from '../models/products.model'


export const products = (req:Request, res:Response) => {
    const { query } = req.query;
  try {
    const products =  ProductModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });

    res.json(products);
  } catch (error) {
    console.error('Error while fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
