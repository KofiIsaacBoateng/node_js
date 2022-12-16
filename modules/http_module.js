const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our home page.')
        res.end()
    }

    if (req.url === '/about') {
        res.write('Welcome to our about page.')
        res.end()
    }

    res.end(`
               <h1>Oops!</h1>
               <p>We don't seem to find your page </p>
               <a href='/'>Go home</a>
    `)

})

server.listen(5000)