import mongoose, { model, Schema } from "mongoose";
const CreditoSchema = new Schema({
    nome: { 
        type: String, 
        required: [true, "o campo nome do crédito é obrigatório!"],
    },
    valor: { 
        type: Number, 
        min: [1, "Valor mínimo de R$ 1,00"], 
        required: [true, "o campo valor do crédito é obrigatório!"], 
    }
},
    {
    timestamps: true,
    }
);
export default model ("creditos", CreditoSchema);