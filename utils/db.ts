import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("DB_CONNECTION_STRING environment variable is not defined")
}

export const client = new MongoClient(
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017"
)
console.log("------- Start connecting to MongDB -------")

export const db = client.db("mongo")
console.log("------- Create database successfully -------")

try {
  db.createCollection("24game")
  console.log("------- Create collection successfully -------")
} catch {
  console.log("Collection already exists !")
}
