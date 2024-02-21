import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Request, Response } from "express"
import { is24 } from "./component/output24game"
// import { runNumber } from "./component/swapNumbers"

async function init() {
  // await client.connect()
  // console.log("------- Connecting to MongoDB Successfully -------")

  const app = express()
  const port = 4000

  app.use(cors())
  app.use(bodyParser.json())

  app.get("/cheat24", (req, res) => {
    const number = req.query.number as string
    const regexp = new RegExp("^([1-9]{4})$")

    //check query 1-9/not 0/not word/four digit
    if (!regexp.test(number)) {
      return res.status(200).json("Please enter a 4-digit number from 1 to 9.")
    }

    //
    //check answer in db
    //

    const numbers = {
      num1: Number(number[0]),
      num2: Number(number[1]),
      num3: Number(number[2]),
      num4: Number(number[3]),
    }
    const result = is24(numbers)
    // console.log(result.length > 0)

    if (result.length <= 0) {
      return res.status(200).json("No Answer")
    } else {
      return res.status(200).json(result)
    }

    // return res.status(200).json(result)
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

// const numbers = {
//   num1: 6,
//   num2: 4,
//   num3: 6,
//   num4: 2,
// }

// const results = is24(numbers)
// console.log(results)
