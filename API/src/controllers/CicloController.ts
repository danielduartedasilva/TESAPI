import {Request, Response} from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
   listar (request: Request, response: Response) {
        response.json(CicloSchema.find());
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

    cadastrar (request: Request,  response: Response) {
        const ciclo = request.body;
        console.log(ciclo);
        CicloSchema.create(ciclo);
        response.json(ciclo);
    }
}

export { CicloController };