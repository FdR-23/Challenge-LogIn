const clientSchema = require('../../model/client')


const deletClient = async (req, res) => {
    const{clientId} = req.params
    try {
    const deletclient = await clientSchema.findOneAndDelete(clientId)
   
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