"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() { 
  const { data: session } = useSession();
  if(session) {
    return <>
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">

        <div className=" flex-col items-center justify-center text-center content-center">
          <h1 className="font-bold">Hi Mr. {session?.user?.name}</h1>
          <div className=" flex items-center justify-center my-4">
            <img className="w-50px h-50px rounded-full  " src={session?.user?.image} alt="" />
          </div>
          

          <button className="bg-white text-black font-bold p-2 rounded-lg" onClick={()=>signOut()}>Logout</button>

        </div>

      </div>
    </>
  }
  return <>
     <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">

<div className=" flex items-center justify-center">

  <button className="bg-white text-black font-bold p-2 rounded-lg" onClick={()=>signIn('google')}>LogIn</button>

</div>

</div>
  </>
}
