import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Bicicleta extends Model<
  InferAttributes<Bicicleta>,
  InferCreationAttributes<Bicicleta>
> {
  declare ID?: number;
  declare nombre: string;
  declare cedula: string;
  declare fecha_inspeccion: Date;
  declare hora_inspeccion: string;
  declare empresa: string;
  declare salud: string;
  declare llantas: string;
  declare frenos_cambios: string;
  declare pinon_cadena: string;
  declare marco_tenedor: string;
  declare Compromiso1: string;
  declare Compromiso2: string;
  declare observaciones: string;
}

Bicicleta.init(
  {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    cedula: { type: DataTypes.STRING(60), allowNull: false },
    fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
    hora_inspeccion: { type: DataTypes.TIME, allowNull: false },
    empresa: { type: DataTypes.STRING(60), allowNull: false },
    salud: { type: DataTypes.STRING(60), allowNull: false },
    llantas: { type: DataTypes.STRING(60), allowNull: false },
    frenos_cambios: { type: DataTypes.STRING(60), allowNull: false },
    pinon_cadena: { type: DataTypes.STRING(60), allowNull: false },
    marco_tenedor: { type: DataTypes.STRING(60), allowNull: false },
    Compromiso1: { type: DataTypes.STRING(60), allowNull: false },
    Compromiso2: { type: DataTypes.STRING(60), allowNull: false },
    observaciones: { type: DataTypes.STRING(60), allowNull: false },
  },
  {
    sequelize: GestionServiredDB,
    tableName: "inspeccion_bicicleta",
    timestamps: false,
  }
);
