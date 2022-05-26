import dbConnect from "../../utils/database"
import AboutItem from "../../models/AboutItem";

export default async function handler(req, res) {
    await dbConnect();
    const about = await AboutItem.find({})
    res.status(200).json({
        about
    })

}