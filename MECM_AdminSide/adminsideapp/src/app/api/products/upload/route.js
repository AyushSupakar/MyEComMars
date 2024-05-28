import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const { Buffer } = require('node:buffer');


export async function POST(req, res){
    console.log("reached upload route 1");
    const body = await req.formData();
    console.log(body);
    const file= body.get('file');
    console.log(file);
    if(!file){
        return NextResponse.json({ms : "no file"});
    }
    console.log("reached upload route 2");

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log(buffer);
    console.log("reached upload route 3");
    const client = new S3Client({
        region: 'us-east-1',
        credentials: {
            accessKeyId : process.env.S3_ACCESS_ID,
            secretAccessKey : process.env.S3_SCERET_ACCESS_KEY,
        },
    });
    console.log("reached upload route 4");
    const newkey = Date.now()+"-"+file.name;
    
    
   const uploadedfile = await client.send(new PutObjectCommand({
        Bucket : process.env.S3_BUCKET,
        Key: newkey,
        Body: buffer,
        ACL: 'public-read',
        ContentType: file.type,
    }))
    
    console.log("reached upload route 5");
    console.log(uploadedfile);
    const link = 'https://'+(process.env.S3_BUCKET)+'.s3.amazonaws.com/'+(newkey)
    return NextResponse.json(link);
}