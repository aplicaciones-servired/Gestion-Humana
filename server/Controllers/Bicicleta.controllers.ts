import { Request, Response } from "express";
import { Bicicleta } from "../Models/Bicicleta.model";
const { Op } = require("sequelize");

export const getBicicletas = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;
  const offset = (page - 1) * pageSize;
  const fecha_inspeccion = req.query.fecha_inspeccion as string;
  const fechaInicio = req.query.fechaInicio as string;
  const fechaFin = req.query.fechaFin as string;
  const ID = req.query.ID as string;

  let whereClause: any = {};

  if (fechaInicio && fechaFin) {
    whereClause.fecha_inspeccion = {
      [Op.between]: [fechaInicio, fechaFin],
    };
  } else if (fecha_inspeccion) {
    whereClause.fecha_inspeccion = {
      [Op.eq]: fecha_inspeccion,
    };
  } else if (ID) {
    whereClause.ID = {
      [Op.eq]: ID,
    };
  }

  try {
    const bicicletas = await Bicicleta.findAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
      order: [
        ["fecha_inspeccion", "DESC"],
        ["id", "DESC"],
      ],
    });

    const count = await Bicicleta.count({ where: whereClause });
    res.status(200).json({ count, datos: bicicletas, page, pageSize });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bicicletas", error });
  }
};
