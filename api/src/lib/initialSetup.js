const roleSchema = require('../model/role.js')
const userSchema = require('../model/user.js')

const createRoles = async () => {
    try {
        //vamos a ver si extisten documentos 
        const count = await roleSchema.estimatedDocumentCount()
        if (count > 0) {
            return
        }
        const values = await Promise.all([
            new roleSchema({ name: 'admin' }).save(),
            new roleSchema({ name: 'moderator' }).save(),
            new roleSchema({ name: 'user' }).save()
        ])
    } catch (error) {
        console.error(error)
    }
}


const createAdmin = async () => {

    try {
        const foundAdmin = await userSchema.findOne({ name: 'Admin' })
        if (foundAdmin) {
            return
        }

        const newUser = await userSchema({
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin123',
            role: 'admin'
        })
        const savedUser = await newUser.save()
        console.log('User Admin created')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createRoles,
    createAdmin
}
