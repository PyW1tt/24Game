import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { Request, Response } from "express"
import { is24 } from "./component/output24game"
import { runNumber } from "./component/swapNumbers"
import { client, db } from "./utils/db"

async function init() {
  dotenv.config()

  await client.connect()
  // console.log("------- Connecting to MongoDB Successfully -------")

  const app = express()
  const port = 4000

  app.use(cors())
  app.use(bodyParser.json())

  app.get("/cheat24", async (req, res) => {
    const number = req.query.number as string
    const regexp = new RegExp("^([1-9]{4})$")

    //check query 1-9/not 0/not word/four digit
    if (!regexp.test(number)) {
      return res.status(200).json("Please enter a 4-digit number from 1 to 9.")
    }

    //check answer in db
    try {
      const collection = db.collection("24game")
      const data = await collection.findOne({
        num: number,
      })

      if (data) {
        return res.status(200).json(data.formula)
      } else {
        const numbers = {
          num1: Number(number[0]),
          num2: Number(number[1]),
          num3: Number(number[2]),
          num4: Number(number[3]),
        }

        //formula 24game
        const result = is24(numbers)

        if (result.length <= 0) {
          return res.status(200).json("No Answer")
        } else {
          const allSwapNum = runNumber(number)
          const collection = db.collection("24game")
          await collection.insertOne({
            num: allSwapNum,
            formula: result,
          })

          return res.status(200).json(result)
        }
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "failed" })
    }
  })

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
  })

  app.get("*", (req: Request, res: Response) => {
    res.status(404).send("Not found")
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

init()
