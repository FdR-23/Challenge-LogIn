const clientSchema = require('../../model/client')

const modClient = async (req, res) => {
    const{clientId} = req.params
    const updateclient = await clientSchema.findByIdAndUpdate(clientId, req.body, {
        new: true
    })
    try {
        res
            .status(201)
            .json(updateclient)

    } catch (error) {
        res
            .status(401)
            .json(error)
    }

}
module.exports = modClient;

