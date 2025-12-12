import { request, response } from "express";
import { Extintores, initExtintoresModel } from "../Models/Extintores.model";
import { Op } from "sequelize";

export const getExtintores = async (req = request, res = response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;
  const zona = req.query.zona as string;
  const offset = (page - 1) * pageSize;
  const fecha_inspeccion = req.query.fecha_inspeccion as string;
  const fechaInicio = req.query.fechaInicio as string;
  const fechaFin = req.query.fechaFin as string;

  if (zona === undefined) {
    res.status(400).json("Zona no válida");
    return;
  }

  const empresa = zona === "Multired" ? "Multired" : "Servired";
  initExtintoresModel(empresa);

  let whereClause: any = {};

  if (fechaInicio && fechaFin) {
    whereClause.fecha_inspeccion = {
      [Op.between]: [fechaInicio, fechaFin],
    };
  } else if (fecha_inspeccion) {
    whereClause.fecha_inspeccion = {
      [Op.eq]: fecha_inspeccion,
    };
  }
  try {
    const extintores = await Extintores.findAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
      order: [
        ["fecha_inspeccion", "DESC"],
        ["id", "DESC"],
      ],
    });
    const count = await Extintores.count({ where: whereClause });
    res.status(200).json({ count, datos: extintores, page, pageSize });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving extintores", error });
  }
};
