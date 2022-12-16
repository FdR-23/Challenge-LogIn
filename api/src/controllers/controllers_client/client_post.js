const clientSchema = require('../../model/client.js')

const newClient = async (req, res) => {
    const { name, lastName, age, gender, addres } = req.body

    try {
        const client = clientSchema({
            name: name.trim().toLowerCase(),
            lastName: lastName.trim().toLowerCase(),
            age: age.trim(),
            gender,
            addres
        });

        await client.save();
        res
            .status(201)
            .json({ message: `Successfuly Registration`, client })

    } catch (error) {
        res
            .status(401)
            .json({ message: `Error registering client` })
    }
}



module.exports = newClient;