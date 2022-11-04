const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roleSchema = new Schema(
    {
        name: String
    },
    {
        versionKey: false
    }
)


module.exports = model ('Role', roleSchema)