import { JsonDatabase } from "wio.db";

const db = new JsonDatabase({ databasePath: "./Database/db.json" });

export { db }