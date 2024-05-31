import axios from "axios";
import { NextResponse } from "next/server";
import { Category } from "../../../../lib/models/Category";
import { mongooseConnect } from "../../../../lib/mongooseConnect";
 
await mongooseConnect();

export async function GET(req){
    const allcats = await Category.find();
    return NextResponse.json(allcats);
}

export async function POST(req, res){

    const body = await req.json();
    const newcat = await Category.create(body);
    return NextResponse.json(newcat);

}
 