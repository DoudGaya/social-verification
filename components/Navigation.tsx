import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './DarkButton'

export const Navigation = () => {
  return (
    <div className=' py-3 flex justify-between w-full items-center text-sm max-w-6xl mx-auto'>
        <div className="">Welcome to social verification
        <Link href="https://doudgaya.xyz" className=' mx-3  text-white bg-blue-500/80 hover:bg-blue-600 cursor-pointer rounded-full px-4 py-2'>
           <span>Doud Gaya</span>
        </Link> 
        </div>
        <ModeToggle />
    </div>
  )
}
