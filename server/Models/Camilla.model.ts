import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { GestionMultiredDB } from "../db/GestionMultiredDB";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Camilla extends Model<
  InferAttributes<Camilla>,
  InferCreationAttributes<Camilla>
> {
  declare ID?: number;
  declare fecha_inspeccion: Date;
  declare responsable_inspeccion: string;
  declare lugar: string;
  declare ubicacion: string;
  declare senalizacion: string;
  declare aceso: string;
  declare estado: string;
  declare instalacion: string;
  declare correas: string;
  declare inmovilizador: string;
  declare observacion?: string;
  declare ubicacion1?: string;
  declare senalizacion1?: string;
  declare aceso1?: string;
  declare estado1?: string;
  declare instalacion1?: string;
  declare correas1?: string;
  declare inmovilizador1?: string;
  declare observacion1?: string;
}

export const initCamillaModel = (zona: string) => {
  const empresa = zona === "Servired" ? GestionServiredDB : GestionMultiredDB;
  Camilla.init(
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
      responsable_inspeccion: { type: DataTypes.STRING(250), allowNull: false },
      lugar: { type: DataTypes.STRING(250), allowNull: false },
      ubicacion: { type: DataTypes.STRING(250), allowNull: false },
      senalizacion: { type: DataTypes.STRING(250), allowNull: false },
      aceso: { type: DataTypes.STRING(250), allowNull: false },
      estado: { type: DataTypes.STRING(250), allowNull: false },
      instalacion: { type: DataTypes.STRING(250), allowNull: false },
      correas: { type: DataTypes.STRING(250), allowNull: false },
      inmovilizador: { type: DataTypes.STRING(250), allowNull: false },
      observacion: { type: DataTypes.STRING(250), allowNull: true },
      ubicacion1: { type: DataTypes.STRING(250), allowNull: true },
      senalizacion1: { type: DataTypes.STRING(250), allowNull: true },
      aceso1: { type: DataTypes.STRING(250), allowNull: true },
      estado1: { type: DataTypes.STRING(250), allowNull: true },
      instalacion1: { type: DataTypes.STRING(250), allowNull: true },
      correas1: { type: DataTypes.STRING(250), allowNull: true },
      inmovilizador1: { type: DataTypes.STRING(250), allowNull: true },
      observacion1: { type: DataTypes.STRING(250), allowNull: true },
    },
    {
      sequelize: empresa,
      tableName: "inspeccion_camilla",
      timestamps: false,
    }
  );
};
