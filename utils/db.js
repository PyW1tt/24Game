import { MongoClient } from "mongodb"

const connectionString = "mongodb://127.0.0.1:27017"
console.log("------- Start connecting to MongDB -------")

export const clientMongo = new MongoClient(connectionString, {
  useUnifiedTopology: true,
})

export const db = client.db("mongo")
console.log("------- Create database successfully -------")

try {
  await db.createCollection("24game")
  console.log("------- Create collection successfully -------")
} catch {
  console.log("Collection already exists !")
}
