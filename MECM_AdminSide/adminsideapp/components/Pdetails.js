"use client"
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import React from 'react'
import Image from 'next/image';


export default function Pdetails() {
    const {data : session} = useSession();
    const pathname = usePathname();
    const place = pathname.slice(1);
  return (
    <div className="flex justify-end">
      <Link href= "/profile" className=' flex space-x-1 items-center'>
        <div className="flex"><Image src={session?.user?.image} width={500} height={500} alt="" className="plink" /></div>
      </Link>
        
      
   
      
    </div>
  )
}
