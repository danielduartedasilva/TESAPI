import express, {Request, Response} from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

console.clear();

const app = express();
const database = mongoose;
//Middlewares - são pequenas funcionalidades que entram no meio da aplicação para ajudar a funcionar da maneira que se precisa
app.use(express.json());
app.use(router);

// app.listen(3000, function(){
//     console.log("O servidor está rodando");
// });
// as 3 ultimas linhas acima podem ser substituídas por essas 3 linhas abaixo

app.listen(3000, () => {
    console.log("O servidor está rodando");
});
