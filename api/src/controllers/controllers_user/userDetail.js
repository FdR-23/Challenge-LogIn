const userSchema = require('../../model/user.js')

const userDetails = async (req, res) => {
    const { userId } = req.params
    try {

        const findUser = await userSchema.findById(userId)

        if (findUser) {
            const { _id, username, role, email} = findUser
            const dataUser = { _id, username, role, email }
            res
                .status(200)
                .json(dataUser)

        } else {
            res
                .status(404)
                .json({ message: `User not found` })
        }
    } catch (error) {
        res
            .status(404)
            .json({ message: 'User not found' })
    }

}


module.exports = userDetails;