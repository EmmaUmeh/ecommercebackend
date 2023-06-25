import mongoose, { Document, Schema } from "mongoose";


interface RegUser extends Document{
    name: string,
    password: any,
    email: string,
}

const RegisterSchema = new Schema<RegUser>({
    name: {
        type: String, 
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    }
})

// module.exports = mongoose.model<RegUser>('Registration', RegisterSchema)
export default mongoose.model<RegUser>('RegisterUser', RegisterSchema)