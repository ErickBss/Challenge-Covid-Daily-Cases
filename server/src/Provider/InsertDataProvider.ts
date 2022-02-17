import { Request, Response } from 'express'
import { client } from '../database/prismaClient'
const covidData = require('../../data/data.json')

export class InsertDataProvider {
  handle (req: Request, res:Response) {
    const data = covidData.map((e) => {
      return e
    })
    async function inserting () {
      await client.covidCases.createMany({
        data
      })
    }

    inserting().catch((e) => {
      console.log(e)
      process.exit(1)
    })
    res.json(data)
  }
}
