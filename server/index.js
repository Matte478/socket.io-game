const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')

const PORT = 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

server.listen(PORT, () => {
  console.log(`Server listening at :${PORT}...`)
})
