const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt-nodejs')
const salt = 10;


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }],
    date: {
        type: Date,
        default: Date.now,
    }
})

//el objetivo es asegurarse de que la contraseña siempre esté encriptada antes de guardar
userSchema.pre(save, function (next) {
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, salt, (error, passwordHash) => {
        if (error) {
            return next(error);
        } else
            this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};

module.exports = model('user', userSchema)