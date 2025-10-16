import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Test route
app.get("/", (req, res) => {
  res.send("PERN backend is running 🚀");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
