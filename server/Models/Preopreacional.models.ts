import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Preopreacional extends Model<
  InferAttributes<Preopreacional>,
  InferCreationAttributes<Preopreacional>
> {
  declare id?: number;
  declare fecha: Date;
  declare hora: string;
  declare nombre: string;
  declare cedula: string;
  declare placa: string;
  declare kilometraje: string;
  declare empresa: string;
  declare salud: string;
  declare casco: string;
  declare botas: string;
  declare profundidad: string;
  declare luces: string;
  declare bocina: string;
  declare espejos: string;
  declare aceite: string;
  declare freno: string;
  declare cadena: string;
  declare soat: string;
  declare obervaciones?: string;
}

Preopreacional.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    hora: { type: DataTypes.TIME, allowNull: false },
    nombre: { type: DataTypes.STRING(60), allowNull: false },
    cedula: { type: DataTypes.STRING(60), allowNull: false },
    placa: { type: DataTypes.STRING(60), allowNull: false },
    kilometraje: { type: DataTypes.STRING(60), allowNull: false },
    empresa: { type: DataTypes.STRING(60), allowNull: false },
    salud: { type: DataTypes.STRING(60), allowNull: false },
    casco: { type: DataTypes.STRING(60), allowNull: false },
    botas: { type: DataTypes.STRING(60), allowNull: false },
    profundidad: { type: DataTypes.STRING(60), allowNull: false },
    luces: { type: DataTypes.STRING(60), allowNull: false },
    bocina: { type: DataTypes.STRING(60), allowNull: false },
    espejos: { type: DataTypes.STRING(60), allowNull: false },
    aceite: { type: DataTypes.STRING(60), allowNull: false },
    freno: { type: DataTypes.STRING(60), allowNull: false },
    cadena: { type: DataTypes.STRING(60), allowNull: false },
    soat: { type: DataTypes.STRING(60), allowNull: false },
    obervaciones: { type: DataTypes.STRING(60), allowNull: true },
  },
  {
    sequelize: GestionServiredDB,
    tableName: "inspeccion_preoperacional",
    timestamps: false,
  }
);
