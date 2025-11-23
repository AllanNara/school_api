import "reflect-metadata";
import { DataSource } from "typeorm";
import { Student } from "./entity/Student.js";
import config from "./config/config.js";

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASS, POSTGRES_NAME } = config;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASS,
  database: POSTGRES_NAME,
  synchronize: true,
  logging: true,
  entities: [Student],
  subscribers: [],
  migrations: [],
})
