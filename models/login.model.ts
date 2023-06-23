import mongoose, {Document} from 'mongoose'

interface UserInfo extends Document {
    username: string,
    password: string,
}

const UserSchema = new mongoose.Schema({
    
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
  password: { 
    type: String, 
    required: true 
},
})

module.exports = mongoose.model<UserInfo>('User', UserSchema)