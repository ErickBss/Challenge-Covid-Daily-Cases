import { Request, Response } from 'express'
import { FilterAvailableDateUseCase } from '../useCases/FilterAvailableDateUseCase'

export class AvailableDateController {
  async handle (req: Request, res: Response) {
    const filterAvailableDateUseCase = new FilterAvailableDateUseCase()
    const availableDate = await filterAvailableDateUseCase.execute()
    res.json(availableDate)
  }
}
