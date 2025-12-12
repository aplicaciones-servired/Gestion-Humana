import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const DB_SERVIRED_HOST = process.env.DB_SERVIRED_HOST as string
const DB_SERVIRED_USER = process.env.DB_SERVIRED_USER as string
const DB_SERVIRED_PASSWORD = process.env.DB_SERVIRED_PASSWORD as string
const DB_SERVIRED_NAME = process.env.DB_SERVIRED_NAME as string

const GestionServiredDB = new Sequelize(DB_SERVIRED_NAME, DB_SERVIRED_USER, DB_SERVIRED_PASSWORD, {
  host: DB_SERVIRED_HOST,
  dialect: "mysql",
  timezone: "-05:00",
});

export { GestionServiredDB };