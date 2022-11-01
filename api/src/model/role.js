const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roleScrema = new Schema(
    {
        name: String
    },
    {
        versionkey: fase
    }
)

export default model('Role', roleScrema)