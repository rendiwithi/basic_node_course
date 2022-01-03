const sayHi = require('./5-utils')
const programing = require('./4-names')
const otherExports = require('./6-alternative-flavor')

sayHi("rendi")
sayHi(programing.golang)
sayHi(programing.python)
console.log(otherExports.items[1])

require('./7-mind-gernaade')