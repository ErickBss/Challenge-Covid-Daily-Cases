import { client } from '../database/prismaClient'
const covidData = require('../../data/data.json')

export class InsertDataProvider {
  handle () {
    const data = covidData.map((e) => {
      return e
    })
    async function inserting () {
      await client.covidCases.createMany({
        data
      })
    }

    inserting().catch((e) => {
      process.exit(1)
    })
    return data
  }
}
