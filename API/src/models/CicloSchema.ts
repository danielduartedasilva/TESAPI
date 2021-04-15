import { model, Schema } from "mongoose";
import { CreditoSchema } from "./CreditoSchema";
import { DebitoSchema } from "./DebitoSchema";
const CicloSchema = new Schema({
    data: {
        type: Date,
        required: [true, "O campo data é obrigatório!"],
        min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    },
    creditos: [CreditoSchema],//-------------------------------------------------------------------------------------------------------------------- forma como lista em typescript
    debitos: [DebitoSchema],
},
{
    timestamps: true,
}
);
export default model("ciclos", CicloSchema);