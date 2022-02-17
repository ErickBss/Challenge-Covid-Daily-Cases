import cors from 'cors'

import { Router } from 'express'
import { AvailableDateController } from './Controllers/AvailableDateController'
import { CountCasesController } from './Controllers/CountCasesController'
import { CumulativeCasesController } from './Controllers/CumulativeCasesController'
import { MainDataController } from './Controllers/MainDataController'

const routes = Router()

routes.use(cors())

const mainData = new MainDataController()
const availableDate = new AvailableDateController()
const countCases = new CountCasesController()
const cumulativeCases = new CumulativeCasesController()

routes.get('/', mainData.handle)

routes.get('/dates', availableDate.handle)

routes.get('/cases/:date/count', countCases.handle)

routes.get('/cases/:date/cumulative', cumulativeCases.handle)

export { routes }
