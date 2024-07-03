import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const { Buffer } = require('node:buffer');


export async function POST(req, res){
    
    const body = await req.formData();
    
    const file= body.get('file');
    
    if(!file){
        return NextResponse.json({ms : "no file"});
    }
    

    const buffer = Buffer.from(await file.arrayBuffer());
    
    const client = new S3Client({
        region: 'us-east-1',
        credentials: {
            accessKeyId : process.env.S3_ACCESS_ID,
            secretAccessKey : process.env.S3_SCERET_ACCESS_KEY,
        },
    });
    
    const newkey = Date.now()+"-"+file.name;
    
    
   const uploadedfile = await client.send(new PutObjectCommand({
        Bucket : process.env.S3_BUCKET,
        Key: newkey,
        Body: buffer,
        ACL: 'public-read',
        ContentType: file.type,
    }))
    
    
    const link = 'https://'+(process.env.S3_BUCKET)+'.s3.amazonaws.com/'+(newkey)
    return NextResponse.json(link);
}