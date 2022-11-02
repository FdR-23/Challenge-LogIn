const clientSchema = require('../../model/client')


const deletClient = async (req, res) => {
    const{clientId} = req.params
    const deletclient = await clientSchema.findOneAndDelete(clientId)
    try {
        res
            .status(201)
            .json(`customer successfully deleted`)

    } catch (error) {
        res
            .status(401)
            .json(error)
    }
}



module.exports = deletClient;