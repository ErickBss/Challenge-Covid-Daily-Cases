/* eslint-disable no-unused-vars */
import { client } from '../database/prismaClient'
import { VerificationAvailableDates } from './VerificationAvailableDatesUseCase'

export class FilterAvailableDateUseCase {
  async execute () {
    const dbDates = await client.covidCases.findMany({
      where: {
        location: 'Angola'
      },
      select: {
        date: true
      }
    })
    let dateArray = ''
    function dates (e) {
      const check = e.date !== dateArray
      dateArray = e.date
      if (check) {
        return e
      }
    }

    const filteredDates = await dbDates.filter(dates)

    const verificationAvailableDates = new VerificationAvailableDates()
    const availableDates = await verificationAvailableDates.execute(filteredDates)

    return availableDates
  }
}
