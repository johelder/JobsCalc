const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded( { extended: true }))
server.use(express.static('public'))
server.use(routes)



server.listen(3000, () => console.log('server is running'))