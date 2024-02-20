import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Request, Response } from "express"

function init() {
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

    return res.status(200).json(number)
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
