import mongoose from "mongoose";
mongoose
    .connect("mongodb+srv://topicos:topicos@clustertopicosespeciais.dtupu.mongodb.net/TopicosEspeciais?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() =>{
        console.log("Aplicação conectado com o banco de dados");
    })
    .catch((erro) => {
        console.log(`Erro ao conectar no banco de dados: ${erro}`);
    });

    export { mongoose };