const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt-nodejs')
const SALT_WORK_FACTOR = 10;


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
        if(!user.isModified('password'))
    return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err)
            return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function (err, hashPassword) {
            if (err)
                return next(err);
            // override the cleartext password with the hashed one
            user.password = hashPassword;
            next();
        });
    });


});



userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};

module.exports = model('User', userSchema)