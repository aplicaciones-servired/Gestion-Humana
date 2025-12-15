import { Sequelize } from "sequelize"
import dotenv from "dotenv";

dotenv.config();

const DB_VEHICULAR_HOST = process.env.DB_VEHICULAR_HOST as string
const DB_VEHICULAR_USER = process.env.DB_VEHICULAR_USER as string
const DB_VEHICULAR_PASSWORD = process.env.DB_VEHICULAR_PASSWORD as string
const DB_VEHICULAR_NAME = process.env.DB_VEHICULAR_NAME as string

export const VehicularDB = new Sequelize(DB_VEHICULAR_NAME, DB_VEHICULAR_USER, DB_VEHICULAR_PASSWORD, {
  host: DB_VEHICULAR_HOST,
  dialect: "mysql",
  timezone: "-05:00",
});