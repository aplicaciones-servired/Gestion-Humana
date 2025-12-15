import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { VehicularDB } from "../db/VehicularDB";

export class Vehicular extends Model<
  InferAttributes<Vehicular>,
  InferCreationAttributes<Vehicular>
> {
  declare id?: number;
  declare fecha: Date;
  declare nombre: string;
  declare cedula: string;
  declare placa: string;
  declare kilometraje: string;
  declare l_baja: string;
  declare l_alta: string;
  declare l_marcha_atras: string;
  declare l_interior: string;
  declare l_freno: string;
  declare estacionarias: string;
  declare viraje_derecho: string;
  declare viraje_izquierdo: string;
  declare observacion1?: string;
  declare radio: string;
  declare pitos: string;
  declare parabrisas: string;
  declare vidrios_laterales: string;
  declare manillas_alza_vidrios: string;
  declare Bateria: string;
  declare espejos_retrovisores: string;
  declare cerraduras: string;
  declare plumillas_limpia_vidrios: string;
  declare dispositivo_velocidad: string;
  declare tapa_aceite: string;
  declare tapa_gasolina: string;
  declare tapa_radiador: string;
  declare tapetes: string;
  declare varilla_aceite: string;
  declare revision_externa?: string;
  declare observacion2?: string;
  declare delanteros: string;
  declare traseros: string;
  declare repuestos: string;
  declare observacion3?: string;
  declare principal: string;
  declare emergencia: string;
  declare observacion4?: string;
  declare extintor_vigente: string;
  declare cinturones_seguridad: string;
  declare caja_herramientas: string;
  declare gato: string;
  declare cuna: string;
  declare llave_rueda: string;
  declare botiquin: string;
  declare triangulo: string;
  declare observacion5?: string;
  declare licencia_transito: string;
  declare seguro: string;
  declare licencia_conduccion: string;
  declare revision: string;
  declare observacion6?: string;
  declare liquido_freno: string;
  declare acite: string;
  declare refrigerante: string;
  declare observacion7?: string;
  declare amortiguadores: string;
  declare cardan: string;
  declare caja_cambios: string;
  declare observacion8?: string;
  declare imagen_inspeccion1?: Buffer;
  declare observacion9?: string;
  declare imagen_inspeccion2?: Buffer;
  declare observacion10?: string;
  declare imagen_inspeccion3?: Buffer;
  declare observacion11?: string;
  declare firma_administracion: Buffer;
  declare firma_conductor: Buffer;
}

export const initVehicularModel = (zona: any) => {
  const empresas =
    zona === "Servired" ? "chequeo_vehicular" : "chequeo_vehicular_multired";

  Vehicular.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: { type: DataTypes.DATE, allowNull: false },
      nombre: { type: DataTypes.STRING(60), allowNull: false },
      cedula: { type: DataTypes.STRING(60), allowNull: false },
      placa: { type: DataTypes.STRING(60), allowNull: false },
      kilometraje: { type: DataTypes.STRING(60), allowNull: false },
      l_baja: { type: DataTypes.STRING(60), allowNull: false },
      l_alta: { type: DataTypes.STRING(60), allowNull: false },
      l_marcha_atras: { type: DataTypes.STRING(60), allowNull: false },
      l_interior: { type: DataTypes.STRING(60), allowNull: false },
      l_freno: { type: DataTypes.STRING(60), allowNull: false },
      estacionarias: { type: DataTypes.STRING(60), allowNull: false },
      viraje_derecho: { type: DataTypes.STRING(60), allowNull: false },
      viraje_izquierdo: { type: DataTypes.STRING(60), allowNull: false },
      observacion1: { type: DataTypes.STRING(200), allowNull: true },
      radio: { type: DataTypes.STRING(60), allowNull: false },
      pitos: { type: DataTypes.STRING(60), allowNull: false },
      parabrisas: { type: DataTypes.STRING(60), allowNull: false },
      vidrios_laterales: { type: DataTypes.STRING(60), allowNull: false },
      manillas_alza_vidrios: { type: DataTypes.STRING(60), allowNull: false },
      Bateria: { type: DataTypes.STRING(60), allowNull: false },
      espejos_retrovisores: { type: DataTypes.STRING(60), allowNull: false },
      cerraduras: { type: DataTypes.STRING(60), allowNull: false },
      plumillas_limpia_vidrios: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      dispositivo_velocidad: { type: DataTypes.STRING(60), allowNull: false },
      tapa_aceite: { type: DataTypes.STRING(60), allowNull: false },
      tapa_gasolina: { type: DataTypes.STRING(60), allowNull: false },
      tapa_radiador: { type: DataTypes.STRING(60), allowNull: false },
      tapetes: { type: DataTypes.STRING(60), allowNull: false },
      varilla_aceite: { type: DataTypes.STRING(60), allowNull: false },
      revision_externa: { type: DataTypes.STRING(60), allowNull: true },
      observacion2: { type: DataTypes.STRING(200), allowNull: true },
      delanteros: { type: DataTypes.STRING(60), allowNull: false },
      traseros: { type: DataTypes.STRING(60), allowNull: false },
      repuestos: { type: DataTypes.STRING(60), allowNull: false },
      observacion3: { type: DataTypes.STRING(60), allowNull: true },
      principal: { type: DataTypes.STRING(60), allowNull: false },
      emergencia: { type: DataTypes.STRING(60), allowNull: false },
      observacion4: { type: DataTypes.STRING(60), allowNull: true },
      extintor_vigente: { type: DataTypes.STRING(60), allowNull: false },
      cinturones_seguridad: { type: DataTypes.STRING(60), allowNull: false },
      caja_herramientas: { type: DataTypes.STRING(60), allowNull: false },
      gato: { type: DataTypes.STRING(60), allowNull: false },
      cuna: { type: DataTypes.STRING(60), allowNull: false },
      llave_rueda: { type: DataTypes.STRING(60), allowNull: false },
      botiquin: { type: DataTypes.STRING(60), allowNull: false },
      triangulo: { type: DataTypes.STRING(60), allowNull: false },
      observacion5: { type: DataTypes.STRING(200), allowNull: true },
      licencia_transito: { type: DataTypes.STRING(60), allowNull: false },
      seguro: { type: DataTypes.STRING(60), allowNull: false },
      licencia_conduccion: { type: DataTypes.STRING(60), allowNull: false },
      revision: { type: DataTypes.STRING(60), allowNull: false },
      observacion6: { type: DataTypes.STRING(200), allowNull: true },
      liquido_freno: { type: DataTypes.STRING(60), allowNull: false },
      acite: { type: DataTypes.STRING(60), allowNull: false },
      refrigerante: { type: DataTypes.STRING(60), allowNull: false },
      observacion7: { type: DataTypes.STRING(200), allowNull: true },
      amortiguadores: { type: DataTypes.STRING(60), allowNull: false },
      cardan: { type: DataTypes.STRING(60), allowNull: false },
      caja_cambios: { type: DataTypes.STRING(60), allowNull: false },
      observacion8: { type: DataTypes.STRING(200), allowNull: true },
      imagen_inspeccion1: { type: DataTypes.BLOB, allowNull: true },
      observacion9: { type: DataTypes.STRING(200), allowNull: true },
      imagen_inspeccion2: { type: DataTypes.BLOB, allowNull: true },
      observacion10: { type: DataTypes.STRING(200), allowNull: true },
      imagen_inspeccion3: { type: DataTypes.BLOB, allowNull: true },
      observacion11: { type: DataTypes.STRING(200), allowNull: true },
      firma_administracion: { type: DataTypes.BLOB, allowNull: false },
      firma_conductor: { type: DataTypes.BLOB, allowNull: false },
    },
    {
      sequelize: VehicularDB,
      tableName: empresas,
      timestamps: false,
    }
  );
};
