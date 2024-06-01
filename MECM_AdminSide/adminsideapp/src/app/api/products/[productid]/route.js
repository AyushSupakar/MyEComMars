import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
const { mongooseConnect } = require("../../../../../lib/mongooseConnect");
import { Product } from '../../../../../lib/models/Product';

await mongooseConnect();
export async function GET(req, context){     
     const {params} = context;
    const myid = await params.productid.toString();
    const myprod = await Product.findOne({"_id" : myid});
    return NextResponse.json(myprod);
}

export async function PUT(req, context){
    const data = await req.json();
    const {prdname, desc, price, imgurl, parentcatname} = data;
    const {params} = context;
    const filter = {"_id" : params.productid};
    const update = {"prdname" : prdname , "desc" : desc , "price" : price, "imgurl" : imgurl, "parentcatname" : parentcatname};
    const updatedproduct = await Product.findByIdAndUpdate(filter, update, {new : true});
    return NextResponse.json(updatedproduct);
}

export async function DELETE(req, context){
    const {params} = context;
    const pid = params.productid;
    const filter = {"_id" : pid};
    await Product.findOneAndDelete(filter);
    return NextResponse.json({message : "deleted"});
}
