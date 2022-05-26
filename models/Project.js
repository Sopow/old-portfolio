import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    category: {
        name: String,
        icon: String,
        color: String,
        link: String
    },
    name: String,
    description: String,
    image: String
})

export default mongoose.models['Project'] || mongoose.model('Project', ProjectSchema)