import { Command } from "commander";
import dotenv from "dotenv";
dotenv.config();

const program = new Command();

program.option("-p, --port <number>", "server port number");
program.parse(process.argv);

const options = program.opts();

export default {
  PORT: options.port,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT || "5432",
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_NAME: process.env.POSTGRES_NAME,
};
