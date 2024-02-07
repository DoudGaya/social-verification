import React from 'react'
import Link from 'next/link'
import { DarkButton } from './DarkButton'


export const Navigation = () => {
  return (
    <div className=' py-3 flex justify-between px-8 w-full py-5 items-center text-sm max-w-6xl mx-auto'>
        <div className=""> <span className=' hidden lg:block'>Welcome to social verification by</span>
        <Link href="https://doudgaya.xyz" className=' lg:mx-3  text-white bg-blue-500/80 hover:bg-blue-600 cursor-pointer rounded-full px-4 py-2'>
           <span className=' font-semibold'>Doud Gaya</span>
        </Link> 
        </div>
        <DarkButton />
    </div>
  )
}
