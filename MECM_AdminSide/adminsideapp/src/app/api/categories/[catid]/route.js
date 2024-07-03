import { NextResponse } from "next/server";
import { Category } from "../../../../../lib/models/Category";
import { mongooseConnect } from "../../../../../lib/mongooseConnect";

await mongooseConnect();
export async function PUT(req, context){
    const {params} = context;
    const data = await req.json();
    const catid = params.catid;
    const filter = {"_id" : catid};
    const newcat = {
        "catname" : data.ecatname,
        "parentcatname" : data.eparentcatname,
        "imgurl" : data.eimgurl
    }
    const updatedcat = await Category.findOneAndUpdate(filter, newcat);
    

    return NextResponse.json(updatedcat);
} 

export async function DELETE(req, context){
    const {params} = context;
    const catid = params.catid;
    const filter = {"_id" : catid};
    await Category.findOneAndDelete(filter);

    return NextResponse.json({message : "Hi Maa"});
}