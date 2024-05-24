
import { NextResponse } from "next/server";
import { mongooseConnect } from '../../../../lib/mongooseConnect';
import { Product } from '../../../../lib/models/Product';


export async function GET(req) {
  return NextResponse.json({message : "Hello World"});
}
export async function POST(req, res){
  await mongooseConnect();
  const body = await req.json();
  console.log(body);
  await Product.create(body);
  return NextResponse.json({message : "Hello post"});
}
