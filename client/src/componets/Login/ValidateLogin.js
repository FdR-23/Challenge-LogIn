
const validateForm = (input) => {

    const error = {}

    //USERNAME OR E-MAIL
    if (!input.userOrEmail) {
        error.userOrEmail = 'Username or E-mail is required'
    }

    //PASSWORD
    if (!input.password) {
        error.password = 'Password is required'
    }

    
    return error
}


export default validateForm