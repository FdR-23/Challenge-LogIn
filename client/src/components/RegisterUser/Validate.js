const validateForm = (input) => {

    const error = {}

    //const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    //const ExpresionNumber = new RegExp('^[0-9]+$', 'i');
    const ExpresionEmail = new RegExp(/^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    //const ExpresionUrl = new RegExp(/^(ftp|http|https):[^ "]+$/);

    //USERNAME
    if (!input.username) {
        error.username = 'Username is required'
    } else if (input.username.length < 4 || input.username.length > 20) {
        error.username = 'Only 4 and 20 characters'
    }



    //EMAIL
    if (!input.email) {
        error.email = 'E-mail is required'
    } else if (!ExpresionEmail.test(input.email)) {
        error.email = 'E-mail incorrect'
    }

    //PASSWORD
    if (!input.password) {
        error.password = 'Passwor  is required'
    } else if (input.password.length < 8) {
        error.password = 'Minumun 8 characters'
    }

    //REPEATPASSWORD
    if (!input.repeatPassword) {
        error.repeatPassword = 'Please Repeat Passwor  is required'
    } else if (input.repeatPassword !== input.password) {
        error.repeatPassword = 'The password made to coicidence'
    }
    return error
}

export default validateForm;