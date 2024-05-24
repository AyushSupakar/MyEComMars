"use client"
import React from 'react'
import MyLayout from '../../../components/MyLayout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function page() {
  const{data : session} = useSession();
    return (
   <MyLayout>
    <div className="flex flex-col justify-center items-center">
      <div className=""><Image src={session?.user?.image} alt="" width={1000} height={1000} className="rounded-full w-48 h-48"/></div>
        <div className="font-bold text-black text-lg">Name : {session?.user?.name}</div>
        <div className="font-bold text-black text-lg">E-Mail : {session?.user?.email}</div>
        <div className="font-bold text-black text-lg"> Role : EComMars  Admin </div>
    </div>
   </MyLayout>
  )
}
