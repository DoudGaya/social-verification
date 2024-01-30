import React from 'react'
import Link from 'next/link'
import { DarkButton } from '@/components/DarkButton'

const page = () => {
  return (
    <div>
        <div className=" max-w-6xl mx-auto py-4 flex justify-between items-center">
            <ul className=' flex space-x-4'>
                <li>
                    <Link href={'/'} className=' text-blue-500 font-semibold text-lg'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={''} className='font-semibold text-lg'>
                        Verifications
                    </Link>
                </li>
                <li>
                    <Link href={''} className='font-semibold text-lg'>
                        Posts
                    </Link>
                </li>
            </ul>

            <div className=" flex space-x-4 items-center ">
                <DarkButton />
                <div className=" rounded-full h-[40px] w-[40px] bg-green-200"></div>
            </div>
        </div>
    </div>
  )
}

export default page