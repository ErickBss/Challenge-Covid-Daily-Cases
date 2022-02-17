import { Request, Response } from 'express'
import { client } from '../database/prismaClient'

export class MainDataController {
  async handle (req: Request, res: Response) {
    const getMainData = await client.covidCases.findMany({
      select: {
        date: true,
        location: true,
        num_sequences: true,
        perc_sequences: true,
        num_sequences_total: true,
        variant: true
      }
    })
    res.status(200).json({ 'Fullstack Challenge 2021 🏅 - Covid Daily Cases': getMainData })
  }
}
