import mongoose, {Document} from 'mongoose'

interface UserInfo extends Document {
    email: string,
    password: string,
}

const UserSchema = new mongoose.Schema({
    
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
  password: { 
    type: String, 
    required: true,
},
})

module.exports = mongoose.model<UserInfo>('User', UserSchema)