import express from "express";
import morgan from "morgan";
import config from "./config/config.js";
import studentRouter from "./routes/student.router.js";
import { AppDataSource } from "./data-source.js";

const { PORT } = config;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

server.use("/api/", studentRouter)

server.listen(PORT, async() => {
  try {
    await AppDataSource.initialize()
    console.log("Database connected successfully")
    console.log("listening on port " + PORT)
  } catch (error) {
    console.error("Error to initialize server")  
    console.error(error)
    process.exit(1)
  }
})
