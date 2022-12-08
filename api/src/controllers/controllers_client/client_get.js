const clientSchema = require('../../model/client.js')


const allClient = async (req, res) => {
    const clients = await clientSchema.find()
    try {
        res
            .status(201)
            .json(clients)
    } catch (error) {
        res
            .status(401)
            .json({ message: 'Unauthorized access' })
    }

}



module.exports = allClient;