import cors from 'cors'

import { Router } from 'express'
import { AvailableDateController } from './Controllers/AvailableDateController'
import { CountCasesController } from './Controllers/CountCasesController'
import { CumulativeCasesController } from './Controllers/CumulativeCasesController'

const routes = Router()

routes.use(cors())

const availableDate = new AvailableDateController()
const countCases = new CountCasesController()
const cumulativeCases = new CumulativeCasesController()

routes.get('/', (req, res) => {
  res.status(200).json('Fullstack Challenge 2021 🏅 - Covid Daily Cases')
})

routes.get('/dates', availableDate.handle)

routes.get('/cases/:date/count', countCases.handle)

routes.get('/cases/:date/cumulative', cumulativeCases.handle)

export { routes }
