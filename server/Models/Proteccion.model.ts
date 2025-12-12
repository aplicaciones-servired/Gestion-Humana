import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { GestionMultiredDB } from "../db/GestionMultiredDB";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Proteccion extends Model<
  InferAttributes<Proteccion>,
  InferCreationAttributes<Proteccion>
> {
  declare id?: number;
  declare fecha_inspeccion: Date;
  declare responsable_inspeccion: string;
  declare lugar: string;
  declare cargo: string;
  declare pregunta1: string;
  declare observacion1?: string;
  declare pregunta2: string;
  declare observacion2?: string;
  declare pregunta3: string;
  declare observacion3?: string;
  declare pregunta4: string;
  declare observacion4?: string;
  declare pregunta5: string;
  declare observacion5?: string;
  declare pregunta6: string;
  declare observacion6?: string;
  declare pregunta7: string;
  declare observacion7?: string;
  declare pregunta8: string;
  declare observacion8?: string;
  declare pregunta9: string;
  declare observacion9?: string;
  declare pregunta10: string;
  declare observacion10?: string;
  declare pregunta11: string;
  declare observacion11?: string;
  declare pregunta12: string;
  declare observacion12?: string;
  declare pregunta13: string;
  declare observacion13?: string;
  declare pregunta14: string;
  declare observacion14?: string;
  declare pregunta15: string;
  declare observacion15?: string;
  declare pregunta16: string;
  declare observacion16?: string;
  declare imagen_observacion: Buffer;
}

export const initProteccionModel = (zona: string) => {
  const proteccion =
    zona === "Servired" ? GestionServiredDB : GestionMultiredDB;
  Proteccion.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
      responsable_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
      lugar: { type: DataTypes.STRING(250), allowNull: false },
      cargo: { type: DataTypes.STRING(60), allowNull: false },
      pregunta1: { type: DataTypes.STRING(500), allowNull: false },
      observacion1: { type: DataTypes.STRING(60), allowNull: true },
      pregunta2: { type: DataTypes.STRING(500), allowNull: false },
      observacion2: { type: DataTypes.STRING(60), allowNull: true },
      pregunta3: { type: DataTypes.STRING(500), allowNull: false },
      observacion3: { type: DataTypes.STRING(60), allowNull: true },
      pregunta4: { type: DataTypes.STRING(500), allowNull: false },
      observacion4: { type: DataTypes.STRING(60), allowNull: true },
      pregunta5: { type: DataTypes.STRING(500), allowNull: false },
      observacion5: { type: DataTypes.STRING(60), allowNull: true },
      pregunta6: { type: DataTypes.STRING(500), allowNull: false },
      observacion6: { type: DataTypes.STRING(60), allowNull: true },
      pregunta7: { type: DataTypes.STRING(500), allowNull: false },
      observacion7: { type: DataTypes.STRING(60), allowNull: true },
      pregunta8: { type: DataTypes.STRING(500), allowNull: false },
      observacion8: { type: DataTypes.STRING(60), allowNull: true },
      pregunta9: { type: DataTypes.STRING(500), allowNull: false },
      observacion9: { type: DataTypes.STRING(60), allowNull: true },
      pregunta10: { type: DataTypes.STRING(500), allowNull: false },
      observacion10: { type: DataTypes.STRING(60), allowNull: true },
      pregunta11: { type: DataTypes.STRING(500), allowNull: false },
      observacion11: { type: DataTypes.STRING(60), allowNull: true },
      pregunta12: { type: DataTypes.STRING(500), allowNull: false },
      observacion12: { type: DataTypes.STRING(60), allowNull: true },
      pregunta13: { type: DataTypes.STRING(500), allowNull: false },
      observacion13: { type: DataTypes.STRING(60), allowNull: true },
      pregunta14: { type: DataTypes.STRING(500), allowNull: false },
      observacion14: { type: DataTypes.STRING(60), allowNull: true },
      pregunta15: { type: DataTypes.STRING(500), allowNull: false },
      observacion15: { type: DataTypes.STRING(60), allowNull: true },
      pregunta16: { type: DataTypes.STRING(500), allowNull: false },
      observacion16: { type: DataTypes.STRING(60), allowNull: true },
      imagen_observacion: { type: DataTypes.BLOB, allowNull: false },
    },
    {
      sequelize: proteccion,
      tableName: "inspeccion_proteccion",
      timestamps: false,
    }
  );
};
