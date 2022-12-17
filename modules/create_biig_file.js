const { writeFileSync } = require('fs')

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big_text.txt', 'Biiig file!', { flag: 'a' })
}