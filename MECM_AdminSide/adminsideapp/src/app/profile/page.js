"use client"
import React from 'react'
import MyLayout from '../../../components/MyLayout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Page() {
  const{data : session} = useSession();
    return (
   <MyLayout>
    <div className="flex flex-col justify-center items-center">
      <div className="border-8 cborder-blue-900 rounded-full p-2 shadow-xl "><Image src={session?.user?.image} alt="" width={1000} height={1000} className="rounded-full w-36 h-36"/></div>
      <div className="flex-col my-8"> 
        <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-e-lg shadow-xl rlink cursor-pointer">Name : {session?.user?.name}</div>
        <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-e-lg shadow-xl rlink cursor-pointer">E-Mail : {session?.user?.email}</div>
        <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-e-lg shadow-xl rlink cursor-pointer"> Role : EComMars  Admin </div></div>
       
    </div>
   </MyLayout>
  )
}
