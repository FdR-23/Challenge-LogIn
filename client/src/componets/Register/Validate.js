


const validateForm = (input) => {

    const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    const ExpresionNumber = new RegExp('^[0-9]+$', 'i');
    const ExpresionEmail = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g')
    //const ExpresionUrl = new RegExp(/^(ftp|http|https):[^ "]+$/);

    //USERNAME
    if (!input.name) { error.name = 'Name is required' }
    else if (input.name.length < 3 || input.name.length > 20) { error.name = 'Only 3 and 20 characters' }



    if (!input.email) { error.name = 'E-mail is required' }
    else if (!ExpresionEmail.test(input.email)) {
        error.name = 'E-mail is required'
    }

}