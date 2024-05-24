import React from 'react'
import MyLayout from "../../../components/MyLayout"
import Link from 'next/link'
export default function page() {
  return (
    <MyLayout>
        <Link href="/products/new" className='bg-blue-900 text-white p-2 px-4 rounded-lg'>Add New Products</Link>
    </MyLayout>
  )
}
