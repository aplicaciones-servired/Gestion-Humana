import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { GestionMultiredDB } from "../db/GestionMultiredDB";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Bodega extends Model<
  InferAttributes<Bodega>,
  InferCreationAttributes<Bodega>
> {
  declare id?: number;
  declare fecha_inspeccion: Date;
  declare responsable_inspeccion: string;
  declare ubicacion: string;
  declare pregunta1: string;
  declare pregunta2: string;
  declare pregunta3: string;
  declare pregunta4: string;
  declare pregunta5: string;
  declare pregunta6: string;
  declare pregunta7: string;
  declare pregunta8: string;
  declare pregunta9: string;
  declare pregunta10: string;
  declare pregunta11: string;
  declare pregunta12: string;
  declare observacion?: string;
}

export const initEmpresaModel = (zona: string) => {
    const empresa = zona === 'servired' ? GestionServiredDB : GestionMultiredDB;
  Bodega.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
      responsable_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
      ubicacion: { type: DataTypes.STRING(250), allowNull: false },
      pregunta1: { type: DataTypes.STRING(250), allowNull: false },
      pregunta2: { type: DataTypes.STRING(250), allowNull: false },
      pregunta3: { type: DataTypes.STRING(250), allowNull: false },
      pregunta4: { type: DataTypes.STRING(250), allowNull: false },
      pregunta5: { type: DataTypes.STRING(250), allowNull: false },
      pregunta6: { type: DataTypes.STRING(250), allowNull: false },
      pregunta7: { type: DataTypes.STRING(250), allowNull: false },
      pregunta8: { type: DataTypes.STRING(250), allowNull: false },
      pregunta9: { type: DataTypes.STRING(250), allowNull: false },
      pregunta10: { type: DataTypes.STRING(250), allowNull: false },
      pregunta11: { type: DataTypes.STRING(250), allowNull: false },
      pregunta12: { type: DataTypes.STRING(250), allowNull: false },
      observacion: { type: DataTypes.STRING(250), allowNull: true },
    },
    {
      sequelize: empresa,
      tableName: "inspeccion_bodega",
      timestamps: false,
    }
  );
};
