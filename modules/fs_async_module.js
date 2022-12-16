const { readFile, writeFile } = require('fs')

readFile('./content/first_text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first_text = result
    console.log(result)

    readFile('./content/second_text.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second_text = result
        console.log(result)

        writeFile('./content/written_async_text.txt', `This is a written async file containing: \n 1.${first_text} \n 2. ${second_text}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }

        })
    })
})