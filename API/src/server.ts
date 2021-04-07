import express, {Request, Response} from "express";
const app = express();
app.use(express.json());

console.clear();
//Métodos GET, POST e outros
//GET - Para solicitar recursos/dados do servidor
//POST - Para enviar recursos/dados/entidades para o servidor
app.get("/" , (request: Request, response: Response) => {
    response.send("Olá mundo com ts-node-dev!");
});

app.get("/ciclo/listar" , (request: Request, response: Response) => {
    response.json("Teste");
});
app.get("/ciclo/listar/:rg/:telefone" , (request: Request,  response: Response) => {
    const { rg, telefone } = request.params;
    const objeto = {
        nome: "Daniel Duarte da Silva" ,
        cpf: "222.222.222.22" ,
        idade: 30 ,
        rg ,
        telefone
    };
    response.json(objeto);
});

app.post("/ciclo/cadastrar" ,  (request: Request, response: Response) => {
    const pessoa = request.body;
    console.log(pessoa);
    const objeto = { 
        msg: "Cliente cadastrado com sucesso!",
        pessoa
    };
    response.json(objeto);
});
// app.listen(3000, function(){
//     console.log("O servidor está rodando");
// });
// as 3 ultimas linhas acima podem ser substituídas por essas 3 linhas abaixo
app.listen(3000, () => {
    console.log("O servidor está rodando");
});
