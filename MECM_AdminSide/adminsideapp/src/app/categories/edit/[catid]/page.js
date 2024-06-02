"use client"
import React from 'react'
import MyLayout from '../../../../../components/MyLayout'
import { useParams } from 'next/navigation';

function Page() {
    const params = useParams();
    const catid = params.catid;
  return (
    <MyLayout>
      {catid}
    </MyLayout>
  )
}

export default Page
