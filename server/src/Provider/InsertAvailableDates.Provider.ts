import { client } from '../database/prismaClient'

export class InsertAvailableDatesProvider {
  async handle (dates: { date: string }[]) {
    const availableDates = await client.availableDates.createMany({
      data: dates
    })
    return availableDates
  }
}
