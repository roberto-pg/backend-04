import './util/module-alias'
import express from 'express'
import http from 'http'

const app = express()

app.use(express.json())

const httpServer = http.createServer(app)

export { httpServer }
