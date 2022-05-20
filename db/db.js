import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

// const URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const URL =
  "mongodb+srv://admin:gktX9wI5Gg0Dtr2e@hackaton2-api.5qyy2.mongodb.net/?retryWrites=true&w=majority";
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
