"use client"
import React from 'react'
import Link from 'next/link'
import { DarkButton } from '@/components/DarkButton'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import avatar from '@/app/img/avatar.jpg'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

export const DashboardNavigation = () => {

    const {data: session} = useSession()
  return (
    <div className=''>
        <div className="">
        <div className="">
        <div className=" max-w-7xl mx-auto py-2 flex justify-between px-2 items-center">
            <ul className=' flex space-x-4 items-center '>
                <li>
                    <Link href={''} className='font-semibold border-b-2 border-blue-500 text-lg'>
                        <p>Accounts</p>
                    </Link>
                </li>
                <li>
                    <Link href={''} className='font-semibold text-lg'>
                        Social Posts
                    </Link>
                </li>
            </ul>

            <div className=" flex space-x-4 items-center ">
            <p>{session?.user?.email}</p>
                <DropdownMenu>
                <DropdownMenuTrigger className=' outline-none'>
                    <div className=" flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full">
                        <Image src={avatar} alt='' className='h-10 w-10 rounded-full' height={600} width={600} />
                    </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=' my-2 flex flex-col justify-start'>
                    <DropdownMenuItem>
                        <button className='flex items-start space-x-4' onClick={ () => signOut()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                           <span>Sign Out</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                <DarkButton />

            </div>
        </div>
        </div>
     
        </div>
    </div>
  )
}
