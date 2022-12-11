const clientSchema = require('../../model/client')

const modClient = async (req, res) => {
    const { clientId } = req.params
    const updateclient = await clientSchema.findByIdAndUpdate(clientId, req.body, {
        new: true
    })
    try {
        res
            .status(201)
            .json({ message: `Registry Modification Successful`, updateclient })

    } catch (error) {
        res
            .status(401)
            .json({ message: `Error to Modifying User Record`})
    }

}
module.exports = modClient;

