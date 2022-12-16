const validateForm = (input) => {

    const error = {}

    //const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    //  const ExpressionLetterAndAccents = new RegExp(/^[a-z-A-ÿ\s]+$/)
      const ExpresionNumber = new RegExp('^[0-9]+$', 'i');
    // const countSpaceName = input.name.match(/ /g)?.length

    //FILTER BY RANGE AGE

    if (ExpresionNumber.test(input.to)) {
        error.to = 'Name is required'
    }
    if (ExpresionNumber.test(input.from)) {
        error.from = 'Name is required'
    }


}


export default validateForm