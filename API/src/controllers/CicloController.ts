import {Request, Response} from "express";

class CicloController{
   listar (request: Request, response: Response) {
        response.send("Olá mundo com ts-node-dev!");
    }

    listarPorId (request: Request, response: Response) {
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
}

export { CicloController };