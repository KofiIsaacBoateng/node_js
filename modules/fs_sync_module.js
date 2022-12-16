const f_system = require('fs')

const first = f_system.readFileSync('./content/first_text.txt', 'utf8')
const second = f_system.readFileSync('./content/second_text.txt', 'utf8')

console.log(first, second)

f_system.writeFileSync('./content/written_file.txt', 'This is a written file.')