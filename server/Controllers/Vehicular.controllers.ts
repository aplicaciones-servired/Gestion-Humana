import { Request, Response } from "express";
import { Vehicular, initVehicularModel } from "../Models/Vehicular.model";
const { Op } = require("sequelize");

export const getVehicular = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;
  const offset = (page - 1) * pageSize;
  const fecha = req.query.fecha as string;
  const fechaInicio = req.query.fechaInicio as string;
  const fechaFin = req.query.fechaFin as string;
  const Zona = req.query.zona as string;

  if (!Zona) {
    res.status(400).json({ message: "Parámetro 'zona' es requerido" });
    return;
  }

  const empresa = Zona === "Servired" ? "Servired" : "Multired";
  initVehicularModel(empresa);

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
    const vehiculares = await Vehicular.findAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
      order: [
        ["fecha", "DESC"],
        ["id", "DESC"],
      ],
    });

    

    const count = await Vehicular.count({ where: whereClause });
    res.status(200).json({ count, datos: vehiculares, page, pageSize });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving vehiculares", error });
  }
};

export const getVehicularID = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const Zona = req.query.zona as string;

  if (!Zona) {
    res.status(400).json({ message: "Parámetro 'zona' es requerido" });
    return;
  }

  const empresa = Zona === "Servired" ? "Servired" : "Multired";
  initVehicularModel(empresa);

  try {
    const vehicular = await Vehicular.findOne({
      where: {
        id: id,
      },
    });

    if (!vehicular) {
      res.status(404).json({ message: "Registro no encontrado" });
      return;
    }

    const datosConTransformacion = await Promise.all(
      [vehicular].map(async (item: any) => {
        let imagePath_observacion1: any = item.imagen_inspeccion1;
        let imagePath_observacion2: any = item.imagen_inspeccion2;
        let imagePath_observacion3: any = item.imagen_inspeccion3;

        const convertToBase64 = (image: any): string | null => {
          if (!image) return null;

          let buffer: Buffer | null = null;

          if (Buffer.isBuffer(image)) {
            buffer = image;
          } else if (
            typeof image === "object" &&
            image !== null &&
            "data" in image
          ) {
            buffer = Buffer.from((image as { data: number[] }).data);
          }

          if (buffer) {
            // Check for binary image headers
            const header = buffer.slice(0, 4).toString("hex").toUpperCase();

            if (header.startsWith("89504E47")) {
              return `data:image/png;base64,${buffer.toString("base64")}`;
            }
            if (header.startsWith("FFD8FF")) {
              return `data:image/jpeg;base64,${buffer.toString("base64")}`;
            }

            // If not binary, try interpreting as string (Base64 or Data URI)
            const str = buffer.toString("utf-8");
            if (str.startsWith("data:image")) return str;

            // Check for Base64 signatures in the string
            if (str.startsWith("iVBOR")) {
              // PNG Base64
              return `data:image/png;base64,${str}`;
            }
            if (str.startsWith("/9j/")) {
              // JPG Base64
              return `data:image/jpeg;base64,${str}`;
            }

            // Fallback for unknown binary or text
            return `data:image/jpeg;base64,${buffer.toString("base64")}`;
          }

          if (typeof image === "string") {
            return image.startsWith("data:image")
              ? image
              : `data:image/jpeg;base64,${image}`;
          }

          return null;
        };

        // Si viene como objeto tipo { type: 'Buffer', data: [...] }
        if (
          imagePath_observacion1 &&
          typeof imagePath_observacion1 === "object" &&
          "data" in imagePath_observacion1
        ) {
          imagePath_observacion1 = Buffer.from(
            (imagePath_observacion1 as { data: number[] }).data
          ).toString("base64");
        }
        const base64Image1 = imagePath_observacion1
          ? `data:image/jpeg;base64,${imagePath_observacion1}`
          : null;

        if (
          imagePath_observacion2 &&
          typeof imagePath_observacion2 === "object" &&
          "data" in imagePath_observacion2
        ) {
          imagePath_observacion2 = Buffer.from(
            (imagePath_observacion2 as { data: number[] }).data
          ).toString("base64");
        }
        const base64Image2 = imagePath_observacion2
          ? `data:image/jpeg;base64,${imagePath_observacion2}`
          : null;

        if (
          imagePath_observacion3 &&
          typeof imagePath_observacion3 === "object" &&
          "data" in imagePath_observacion3
        ) {
          imagePath_observacion3 = Buffer.from(
            (imagePath_observacion3 as { data: number[] }).data
          ).toString("base64");
        }
        const base64Image3 = imagePath_observacion3
          ? `data:image/jpeg;base64,${imagePath_observacion3}`
          : null;

        return {
          ...item.toJSON(),
          imagen_inspeccion1: base64Image1,
          imagen_inspeccion2: base64Image2,
          imagen_inspeccion3: base64Image3,
          firma_administracion: convertToBase64(item.firma_administracion),
          firma_conductor: convertToBase64(item.firma_conductor),
        };
      })
    );

    res.status(200).json({ datos: datosConTransformacion });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving vehiculares", error });
  }
};
