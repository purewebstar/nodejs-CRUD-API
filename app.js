'use strict'
/**
 *  Module dependencies
 */
import express from 'express'
import post from './api/routes/post.route.js'
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http'
import helmet from 'helmet'

/**
 *  App config
 */
dotenv.config()
const app = express()

/**
 *  Middlewares
 */
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use('/post', post)

const server = http.createServer(app)
const PORT = process.env.PORT || 4000
server.listen(process.env.PORT, () => console.log(`listening on port: ${PORT}`))


