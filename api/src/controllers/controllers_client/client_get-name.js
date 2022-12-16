const clientSchema = require('../../model/client.js')


const getNameClient = async (req, res) => {

    const { name } = req.query;

    const client = await clientSchema.find({ name: name }).exec()

    try {
        if (client.length !== 0) {
            res
                .status(201)
                .json(client)
        } else
            res
                .status(401)
                .json({ message: `Client does't exist ` })

    } catch (error) {
        res
            .status(401)
            .json({ message: `Client does't exist ` })
    }

}





module.exports = getNameClient;