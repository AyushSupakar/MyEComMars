import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../../../lib/db'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
    ],
    adapter: MongoDBAdapter(clientPromise),
}