const { readFile, writeFile } = require('fs').promises
    // const util = require('util')

// const readFilePromised = util.promisify(readFile)
// const writeFilePromised = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


const start = async() => {
    try {
        const first = await readFile('./content/first_text.txt', 'utf8')

        const second = await readFile('./content/second_text.txt', 'utf8')

        console.log(first, second)

        await writeFile('./content/written_async_text.txt', 'This is an elegantly written promisified text! SUPER!!')
    } catch (error) {
        console.log(error)
    }

}

start()


// getText('./content/first_text.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))