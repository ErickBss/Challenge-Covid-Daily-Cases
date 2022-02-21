import { Request, Response } from 'express'
import { CumulativeCasesUseCase } from '../useCases/CumulativeCasesUseCate'

export class CumulativeCasesController {
  async handle (req: Request, res: Response) {
    const date : string = req.params.date

    const cumulativeCasesUseCase = new CumulativeCasesUseCase()
    const cumulativeCases = await cumulativeCasesUseCase.execute(date)

    res.json(cumulativeCases)
  }
}
