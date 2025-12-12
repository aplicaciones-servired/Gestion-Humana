import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { GestionMultiredDB } from "../db/GestionMultiredDB";
import { GestionServiredDB } from "../db/GestionServiredDB";

export class Extintores extends Model<
  InferAttributes<Extintores>,
  InferCreationAttributes<Extintores>
> {
  declare ID?: number;
  declare fecha_inspeccion: Date;
  declare responsable_inspeccion: string;
  declare responsable_documento: string;
  declare lugar_inspeccion: string;
  declare numero: string;
  declare tipo: string;
  declare ubicación: string;
  declare capacidad: string;
  declare proxima_recarga: Date;
  declare golpes: string;
  declare manómetro: string;
  declare pasador_seguridad: string;
  declare manguera: string;
  declare boquilla: string;
  declare manija: string;
  declare cilindro: string;
  declare pintura: string;
  declare señalización: string;
  declare acceso: string;
  declare visibilidad: string;
  declare observacion?: string;
  declare recomendaciones?: string;
}

export const initExtintoresModel = (zona: string) => {
  const empresa = zona === "servired" ? GestionServiredDB : GestionMultiredDB;
  Extintores.init(
    {
      ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fecha_inspeccion: { type: DataTypes.DATE, allowNull: false },
      responsable_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
      responsable_documento: { type: DataTypes.STRING(60), allowNull: false },
      lugar_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
      numero: { type: DataTypes.STRING(60), allowNull: false },
      tipo: { type: DataTypes.STRING(60), allowNull: false },
      ubicación: { type: DataTypes.STRING(60), allowNull: false },
      capacidad: { type: DataTypes.STRING(60), allowNull: false },
      proxima_recarga: { type: DataTypes.DATE, allowNull: false },
      golpes: { type: DataTypes.STRING(60), allowNull: false },
      manómetro: { type: DataTypes.STRING(60), allowNull: false },
      pasador_seguridad: { type: DataTypes.STRING(60), allowNull: false },
      manguera: { type: DataTypes.STRING(60), allowNull: false },
      boquilla: { type: DataTypes.STRING(60), allowNull: false },
      manija: { type: DataTypes.STRING(60), allowNull: false },
      cilindro: { type: DataTypes.STRING(60), allowNull: false },
      pintura: { type: DataTypes.STRING(60), allowNull: false },
      señalización: { type: DataTypes.STRING(60), allowNull: false },
      acceso: { type: DataTypes.STRING(60), allowNull: false },
      visibilidad: { type: DataTypes.STRING(60), allowNull: false },
      observacion: { type: DataTypes.STRING(60), allowNull: true },
      recomendaciones: { type: DataTypes.STRING(60), allowNull: true },
    },
    {
      sequelize: empresa,
      tableName: "inspeccion_extintores",
      timestamps: false,
    }
  );
};
