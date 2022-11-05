const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt')
const saltRounds = 10;


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
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
    role: {
        ref: 'Role',
        type: Schema.Types.String
    },
}, {
    timestamps: true,
    versionKey: false
})


//el objetivo es asegurarse de que la contraseña siempre esté encriptada antes de guardar
userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next()
    };
    // hash the password using our new salt
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
        if (err) {
            return next(err)
        };
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


userSchema.methods.comparePassword = function (password, recivedPassword) {
    return bcrypt.compare(password, recivedPassword)
};







module.exports = model('User', userSchema)