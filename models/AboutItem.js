import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    title: String,
    color: String,
    items: [{
        title: String
    }]
})

export default mongoose.models['AboutItem'] || mongoose.model('AboutItem', UserSchema)