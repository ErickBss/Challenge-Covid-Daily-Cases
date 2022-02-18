import { client } from '../database/prismaClient'
import { InsertAvailableDatesProvider } from '../Provider/InsertAvailableDates.Provider'

export class VerificationAvailableDates {
  async execute (dates: { date: string }[]) {
    const checkDates = await client.availableDates.findMany({
      select: {
        date: true
      }
    })

    if (checkDates) {
      await client.availableDates.deleteMany({})
    }
    const insertAvailableDatesProvider = new InsertAvailableDatesProvider()
    await insertAvailableDatesProvider.handle(dates)

    return checkDates
  }
}
