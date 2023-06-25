import mongoose, { Document, Schema } from "mongoose";

interface SearchProducts extends Document{
    product_name: string,
    product_description: string,
    product_price: number,
}

const ProductModel = new Schema<SearchProducts>({
product_name:{
type: String,
required: true,
},

product_description:{
    type: String,
    required: true,
    },

    product_price:{
        type: Number,
        required: true,
    }

})

export default  mongoose.model<SearchProducts>('Products', ProductModel);