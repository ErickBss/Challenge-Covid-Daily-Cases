import { client } from '../database/prismaClient'

export class CountCasesUseCase {
  async execute (date: string) {
    const countCases = await client.covidCases.findMany({
      where: {
        date: date
      },
      select: {
        date: true,
        location: true,
        num_sequences: true,
        variant: true,
        perc_sequences: true
      }
    })
    return countCases
  }
}
