"use client"

import { useSession } from "next-auth/react";
import MyLayout from "../../components/MyLayout"
import Pdetails from "../../components/Pdetails"
import homegif from "../images/wired-gradient-63-home.gif"

export default function Home() { 
  const {data : session} = useSession();
  return(
    <MyLayout> 
      <div className="flex item-center justify-center"><img src={homegif.src} alt="" className="size-36"/></div>

      <h1 className="ctext-blue-900 text-xl text-center my-4" > Welcome, Admin : {session?.user?.name}. </h1>
 
    </MyLayout>
  )
}
