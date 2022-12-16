// MODULES

const { john: firstName, michael: secondName } = require('./modules/variables')
const sayHi = require('./modules/function')

sayHi(firstName)
sayHi(secondName)
sayHi("Rez")