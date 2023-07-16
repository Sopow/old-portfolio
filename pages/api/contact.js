import axios from 'axios';

export default async function handler(req, res) {
    if (!req.body.name || !req.body.email || !req.body.message || !req.body) {
        return res.status(400).json({
            message: 'No data provided'
        })
    }
    await axios.post('https://discord.com/api/webhooks/1130227075912052806/8H7_beyv09kITCAAiby3Oahf6Zf_Lee8GHZmFadP3qr9387t5C0IzLJs-D48XrbFHJfc', {
        embeds: [{
            title: `${req.body.name} vous à envoyé un mail ! (${req.body.email})`,
            description: req.body.message,
            color: 16763904,
            timestamp: new Date(),
            footer: {
                text: 'Formulaire de contact' + ' | ' + req.body.date
            }
        }]
    }).then(() => {
        res.status(200).json({
            message: "Success"
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}