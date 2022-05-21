import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const mongoClient = new MongoClient(URL);

let db = null;

try {
  await mongoClient.connect();
  db = mongoClient.db("hackaton2-api");
  console.log(chalk.green("Connected to MongoDB"));
} catch (e) {
  console.error("⚠ Could not connect to MongoDB!");
}

export default db;
