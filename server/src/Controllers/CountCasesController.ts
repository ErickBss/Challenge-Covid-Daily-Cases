import { Request, Response } from 'express'
import { CountCasesUseCase } from '../useCases/CountCasesUseCase'

export class CountCasesController {
  async handle (req: Request, res: Response) {
    const date : string = req.params.date
    console.log(date)
    const countCasesUseCase = new CountCasesUseCase()
    const countCases = await countCasesUseCase.execute(date)

    res.json(countCases)
  }
}
