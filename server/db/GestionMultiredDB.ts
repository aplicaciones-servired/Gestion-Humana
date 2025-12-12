import {Sequelize} from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

const DB_MULTIRED_HOST = process.env.DB_MULTIRED_HOST as string
const DB_MULTIRED_USER = process.env.DB_MULTIRED_USER as string
const DB_MULTIRED_PASSWORD = process.env.DB_MULTIRED_PASSWORD as string
const DB_MULTIRED_NAME = process.env.DB_MULTIRED_NAME as string

const GestionMultiredDB = new Sequelize(DB_MULTIRED_NAME, DB_MULTIRED_USER, DB_MULTIRED_PASSWORD, {
  host: DB_MULTIRED_HOST,
  dialect: 'mysql',
  timezone: '-05:00',
});

export {GestionMultiredDB};