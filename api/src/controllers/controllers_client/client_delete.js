const clientSchema = require('../../model/client')


const deletClient = async (req, res) => {
    const { clientId } = req.params
    try {
        const deletclient = await clientSchema.findOneAndDelete(clientId)

        res
            .status(201)
            .json({ message: `Client successfully deleted` })

    } catch (error) {
        res
            .status(401)
            .json({ message: `Error when trying to delete client` })
    }
}



module.exports = deletClient;