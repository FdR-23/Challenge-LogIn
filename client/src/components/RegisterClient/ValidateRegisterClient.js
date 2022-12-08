
const validateForm = (input) => {

    const error = {}

    //const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    const ExpressionLetterAndAccents = new RegExp(/^[a-z-A-ÿ\s]+$/)
    const ExpresionNumber = new RegExp('^[0-9]+$', 'i');
    const countSpaceName = input.name.match(/ /g)?.length
    const countSpaceLastName = input.lastName.match(/ /g)?.length
    //const ExpresionUrl = new RegExp(/^(ftp|http|https):[^ "]+$/);

    //USERNAME OR NAME CLIENT
    if (!input.name) {
        error.name = 'Name is required'
    } else if (input.name.length < 3 || input.name.length > 40) {
        error.name = 'Only 3 and 40 characters'
    } else if (!ExpressionLetterAndAccents.test(input.name)) {
        error.name = 'Only Letters and spaces'
    } else if (countSpaceName === input.name.length) {
        error.name = 'You must enter letters to'
    } else if (countSpaceName > 2) {
        error.name = 'Max 2 spaces'
    }

    //USERNAME OR LASTNAME CLIENT
    if (!input.lastName) {
        error.lastName = 'Last Name is required'
    } else if (input.lastName.length < 3 || input.lastName.length > 40) {
        error.lastName = 'Only 3 and 40 characters'
    } else if (!ExpressionLetterAndAccents.test(input.lastName)) {
        error.lastName = 'Only Letters and spaces'
    } else if (countSpaceLastName === input.lastName.length) {
        error.lastName = 'You must enter letters to'
    } else if (countSpaceLastName > 2) {
        error.lastName = 'Max 2 spaces'
    }

    //USERNAME OR AGE CLIENT
    if (!input.age) {
        error.age = 'Username or E-mail is required'
    } else if (!ExpresionNumber.test(input.age)) {
        error.age = 'Only numbers'
    }

    //USERNAME OR GENDER CLIENT
    if (!input.gender) {
        error.gender = 'Gender is required'
    }


    return error
}

export default validateForm