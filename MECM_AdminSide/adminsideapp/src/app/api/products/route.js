
import { NextResponse } from "next/server";
import { mongooseConnect } from '../../../../lib/mongooseConnect';
import { Product } from '../../../../lib/models/Product';

 await mongooseConnect();
export async function GET(req) {
     const allproducts = await Product.find();
  
  return NextResponse.json(allproducts);
  
}

export async function POST(req, res){
 
  const body = await req.json();
  
  await Product.create(body);
  return NextResponse.json({message : "Hello post"});
}
