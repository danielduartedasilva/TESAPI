import {Request, Response} from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
   async listar (request: Request, response: Response) {
        response.json(await CicloSchema.find());
    }

    listarPorId (request: Request, response: Response){
        const { rg, telefone } = request.params;
        const objeto = {
            nome: "Daniel Duarte da Silva" ,
            cpf: "222.222.222.22" ,
            idade: 30 ,
            rg ,
            telefone
        };
        response.json(objeto);
    }

    async cadastrar (request: Request,  response: Response) {
        try {
            const ciclo = await CicloSchema.create(request.body);
            response.status(201).json(ciclo);
        } catch (error) {
            response.status(400).json(error);
        } 
    }
}

export { CicloController };