"use client"
import { SessionProvider } from "next-auth/react"
import React from 'react';


const Sessionwrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Sessionwrapper;
