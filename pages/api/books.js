import { getAllBooks } from "../../api-helpers/controllers/books-controller";
import { connectDatabase } from "../../api-helpers/utils";


export default async function handler(req, res){
    await connectDatabase();

    if(req.method === "GET"){
       return getAllBooks(req, res)
    }
}