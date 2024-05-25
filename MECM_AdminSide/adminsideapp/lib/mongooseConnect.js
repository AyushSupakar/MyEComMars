import mongoose from 'mongoose'

export async function mongooseConnect() {
 if(mongoose.connection.readyState===1)
    {
        console.log("Mangoose is already Connected");
        return mongoose.connection.asPromise();
    }
    else{
        const uri = process.env.MONGODB_URI;
        console.log("Mangoose being Connected");
        const connected = await mongoose.connect(uri);
        console.log("Mangoose Connected")
        return connected;

    }
}
