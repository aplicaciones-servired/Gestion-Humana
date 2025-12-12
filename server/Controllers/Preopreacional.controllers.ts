import { request, response } from "express";
import { Preopreacional } from "../Models/Preopreacional.models";
import { Op } from "sequelize";

export const getPreoperacionales = async (req = request, res = response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;
  const offset = (page - 1) * pageSize;
  const fecha = req.query.fecha as string;
  const fechaInicio = req.query.fechaInicio as string;
  const fechaFin = req.query.fechaFin as string;

  let whereClause: any = {};

  if (fechaInicio && fechaFin) {
    whereClause.fecha = {
      [Op.between]: [fechaInicio, fechaFin],
    };
  } else if (fecha) {
    whereClause.fecha = {
      [Op.eq]: fecha,
    };
  }

  try {
    const preoperacionales = await Preopreacional.findAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
      order: [
        ["fecha", "DESC"],
        ["id", "DESC"],
      ],
    });

    const count = await Preopreacional.count({ where: whereClause });
    res.status(200).json({ count, datos: preoperacionales, page, pageSize });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving preoperacionales", error });
  }
};