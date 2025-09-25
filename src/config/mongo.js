import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI, {
  maxPoolSize: 10,          // like MySQL connectionLimit
  minPoolSize: 2,           // keep at least 2 connections ready
  waitQueueTimeoutMS: 5000, // wait 5s if pool is busy before error
  connectTimeoutMS: 10000,  // 10s max for initial connection
  socketTimeoutMS: 45000,   // 45s max for queries
});

let db;

export async function connectMongo() {
  if (!db) {
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME);
    console.log("✅ Connected to MongoDB with pooling");
  }
  return db;
}
