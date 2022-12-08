
const validateForm = (input) => {

    const error = {}

    const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    const ExpresionNumber = new RegExp ('^[0-9]+$', 'i');



   
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