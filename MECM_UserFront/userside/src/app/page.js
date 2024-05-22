"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const {data : session} = useSession();
  if(!session){
  return (
    <>
    <div className="bg-blue-900 flex w-screen h-screen align-center justify-center">

      <div className="flex items-center justify-center">

          <button className="bg-white text-black rounded-lg p-2 px-4 font-bold " onClick={()=>signIn('google')}>Log in with Google</button>

      </div>


    </div>
    </>

  );
}
else{

  return(
    <>
    <div className="bg-blue-900 flex w-screen h-screen items-center justify-center">

      <div className="flex-col items-center justify-center py-4">
        <div className="flex items-center justify-center">
          <img src={session?.user?.image} alt="user profile image" className="w-40px h-40px rounded-full" />
          </div>
        
        <h1 className="font-bold text-center py-4"> Hello {session?.user?.name}</h1>
        <div className="flex items-center justify-center py-4">

          <button className="bg-white text-black rounded-lg p-2 px-4 font-bold " onClick={()=>signOut()}>Logout</button>

          </div>
        </div>
          


    </div>
    </>
  );

}
}
