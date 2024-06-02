import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../../../lib/db'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
const adminEmails = [process.env.ADMIN_EMAIL];
export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    callbacks:{
        session: ({session,user})=>{
            if(adminEmails.includes(user?.email)){
                return session;
            }
            else{
                return session;
            }
        },
    }
}