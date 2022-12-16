const clientSchema = require('../../model/client')

const modClient = async (req, res) => {
    const { clientId } = req.params
    const { _id, name, lastName, age, gender } = req.body
    const dataUpdate = {
        _id: _id,
        name: name.trim().toLowerCase(),
        lastName: lastName.trim().toLowerCase(),
        age: age,
        gender: gender
    }
    const updateclient = await clientSchema.findByIdAndUpdate(clientId, dataUpdate, {
        new: true
    })
    try {
        res
            .status(201)
            .json({ message: `Registry Modification Successful`, updateclient })

    } catch (error) {
        res
            .status(401)
            .json({ message: `Error to Modifying User Record` })
    }

}
module.exports = modClient;

