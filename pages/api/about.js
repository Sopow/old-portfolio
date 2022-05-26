import dbConnect from "../../utils/database"
import About from "../../models/About";

export default async function handler(req, res) {
    await dbConnect();
    const about = await About.find({})
    res.status(200).json({
        about
    })
}