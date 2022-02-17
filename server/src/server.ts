import { InsertDataProvider } from './Provider/InsertDataProvider'
import { routes } from './routes'

const express = require('express')

const app = express()

app.use(express.json())

const insertData = new InsertDataProvider()

app.get('/insertSystem', insertData.handle)

app.use(routes)

app.listen('3001', () => {
  console.log('Server Started')
})
