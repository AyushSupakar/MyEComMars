
import { NextResponse } from "next/server";
import { mongooseConnect } from '../../../../lib/mongooseConnect';
import { Product } from '../../../../lib/models/Product';

 await mongooseConnect();
export async function GET(req) {
 
  const allproducts = await Product.find();
  console.log(allproducts);
  return NextResponse.json(allproducts);
}
export async function POST(req, res){
 
  const body = await req.json();
  console.log(body);
  await Product.create(body);
  return NextResponse.json({message : "Hello post"});
}
export async function DELETE(req, res){
  const did = await req.json()
  console.log("about to delete this mf = " +did );
}
