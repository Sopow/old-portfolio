import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    category: String,
    title: String,
    content: String
})

export default mongoose.models['About'] || mongoose.model('About', UserSchema)