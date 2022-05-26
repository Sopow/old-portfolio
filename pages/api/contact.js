import axios from 'axios';

export default async function handler(req, res) {
    if(!req.body.name || !req.body.email || !req.body.message || !req.body) {
        return res.status(400).json({
            message: 'No data provided'
        })
    }
    axios.post('https://discord.com/api/webhooks/970771448652234803/Z-vVxElX3LQoMsMFUPrbIkydmZUUxGG_5jV_JPfNkj31xD72KF_A8gyLdkI9atqGPPy3', {
        embeds: [{
            title: `${req.body.name} has contacted you! (${req.body.email})`,
            description: req.body.message,
            color: 16763904,
            timestamp: new Date(),
            footer: {
                text: 'Contact Form' + ' | ' + req.body.date
            }
        }]
    })
    res.status(200).json({
        message: "Success"
    })
}