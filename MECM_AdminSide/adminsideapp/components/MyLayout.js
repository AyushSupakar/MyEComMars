"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";
import Pdetails from "./Pdetails"
export default function MyLayout({children}) {
    const { data: session } = useSession();
    if(session){
      return(
        <div className=" flex min-h-screen cbg-blue-900 p-1 ">
        <Nav/>
        <div className="cbg-white flex-grow mt-2 mr-2 mb-2 text-black rounded-lg p-4 font-bold"><Pdetails/>{children}</div>
        </div>
      )
    }
    else{
      return(
        <div className="cbg-blue-900 w-screen h-screen flex items-center justify-center">
         
         <div className="text-center w-full"><button className="btn-primary bg-white text-black font-bold p-2 rounded-lg" onClick={()=>signIn('google')}>LogIn with Google</button></div>
        </div>
      )
    }
    
}
