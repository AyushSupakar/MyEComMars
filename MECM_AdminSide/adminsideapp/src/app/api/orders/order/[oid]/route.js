import { NextResponse } from "next/server";
import { Order } from "../../../../../../lib/models/Order";
import { mongooseConnect } from "../../../../../../lib/mongooseConnect";

export async function GET(req, context){
    await mongooseConnect();

    const {params} = context;
    const {oid} = params;

    const filter = {
        "_id" : oid,
    }

    const myorder = await Order.findOne(filter);

    return NextResponse.json(myorder);

}