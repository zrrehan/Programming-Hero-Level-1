import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const parameters = await params;
    const singleID = parameters.id;
    const query = {_id: new ObjectId(singleID)}
    console.log(query)
    const result = await dbConnect("products").findOne(query);
    return Response.json(result);
}

export async function PUT(req, {params}) {
    const parameters = await params;
    const request = await req.json();
    const newPrice = request.price;
    const updatedDocument = {
        $set: {
            price: newPrice
        }
    }
    const filter = {_id: new ObjectId(parameters.id)};
    const updatedResponse = await dbConnect("products").updateOne(filter, updatedDocument)
    return Response.json(updatedResponse)
}