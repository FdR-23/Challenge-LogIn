const clientSchema = require('../../model/client.js')

const newClient = async (req, res) => {
    const { name, lastName, age, gender, addres } = req.body

    try {
        const client = clientSchema({
            name: name.trim().charAt(0).toUpperCase() + name.slice(1),
            lastName: lastName.trim().charAt(0).toUpperCase() + lastName.slice(1),
            age: age.trim(),
            gender,
            addres
        });

        await client.save();
        res
        .status(201)
        .json(client);

    } catch (error) {
        res
        .status(401)
        .json({message: `Error registering client`})
    }
}



module.exports = newClient;