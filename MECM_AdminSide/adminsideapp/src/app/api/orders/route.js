import { NextResponse } from "next/server";
import { mongooseConnect } from "../../../../lib/mongooseConnect";
import { Order } from "../../../../lib/models/Order";

export async function GET(req, res){
    await mongooseConnect();

    const allorders = await Order.find();

    return NextResponse.json(allorders);

}