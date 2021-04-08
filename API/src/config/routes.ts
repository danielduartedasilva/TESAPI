import { Router, Request, Response } from "express";
import { CicloController } from "../controllers/CicloController";
const router = Router();
const cicloController = new CicloController();

//Métodos GET, POST e outros
//GET - Para solicitar recursos/dados do servidor
//POST - Para enviar recursos/dados/entidades para o servidor
router.get("/", cicloController.listar);
router.get("/ciclo/listar/:rg/:telefone", cicloController.listarPorId);
router.post("/ciclo/cadastrar",  cicloController.cadastrar);

export { router };
