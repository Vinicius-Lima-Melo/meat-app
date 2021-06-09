import * as jsonServer from 'json-server'
import {Express} from 'express'
import * as https from 'https'
import * as fs from 'fs'  

const server:Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

const options ={
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}


https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on port: 3001')
})
