import mongoose from 'mongoose'

export function mongooseConnect() {
 if(mongoose.connection.readyState===1)
    {
        console.log("Mangoose Connected");
        return mongoose.connection.asPromise();
    }
    else{
        const uri = process.env.MONGODB_URI;
        console.log("Mangoose being Connected");
        return mongoose.connect(uri);

    }
}
