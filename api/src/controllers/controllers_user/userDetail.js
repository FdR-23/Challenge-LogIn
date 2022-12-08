const { findById } = require('../../model/user.js');
const userSchema = require('../../model/user.js')

const userDetails = async (req, res) => {
    const { userId } = req.params

    const findUser = await findById(userId)

    if (findUser) {
        res
            .status(404)
            .json(findUser)

    } else {
        res
            .status(404)
            .json({ message: `User not found` })
    }
}


module.exports = userDetails;