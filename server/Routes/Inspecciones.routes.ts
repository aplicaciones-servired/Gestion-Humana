import { Router } from "express";
import { getBicicletas } from "../Controllers/Bicicleta.controllers";
import { getBodegas } from "../Controllers/Bodega.controllers";
import { getBotiquines } from "../Controllers/Botiquin.controllers";
import { getCamillas } from "../Controllers/Camilla.controllers";
import { getExtintores } from "../Controllers/Extintores.controllers";
import { getHerramientas } from "../Controllers/Herraminetas.controllers";
import { getLocativas } from "../Controllers/Locativa.controllers";
import { getPreoperacionales } from "../Controllers/Preopreacional.controllers";
import { getProtecciones } from "../Controllers/Proteccion.controllers";

export const RoutesGET = Router();

RoutesGET.get("/bicicleta", getBicicletas);

RoutesGET.get("/bodega", getBodegas);

RoutesGET.get("/botiquin", getBotiquines);

RoutesGET.get("/camilla", getCamillas);

RoutesGET.get("/extintores", getExtintores);

RoutesGET.get("/herramienta", getHerramientas);

RoutesGET.get("/locativa", getLocativas);

RoutesGET.get("/preoperacional", getPreoperacionales);

RoutesGET.get("/proteccion", getProtecciones);