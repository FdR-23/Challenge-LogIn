const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const { Schema, } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.method.encrypPassword = async function(password)  {
   return  await bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
userSchema.method.comparePassword = async function (password)  {
    return await bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('users', userSchema)