const clientSchema = require('../../model/client.js')

const newClient = async (req, res) => {
    const { name, lastName, age, gender, addres } = req.body

    try {
        const client = clientSchema({
            name, lastName, age, gender, addres
        });

        await client.save();
        res.status(201).json(client);

    } catch (error) {
        res.status(401).json(error)
    }
}



module.exports = newClient;