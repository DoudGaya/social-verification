"use client"
import { DashboardNavigation } from '@/components/ui/DashboardNavigation'
import React from 'react'
import { twitterCards } from '@/lib/utils'
import { BsTwitterX } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'




import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { TwitterCard } from '@/components/dashboard/TwitterCard'


const page = () => {
  return (
    <div>
        <DashboardNavigation />
        <div className=" w-full border-b max-w-7xl mx-auto"></div>
        <div className=" flex flex-col w-full">
            <div className=" flex w-full space-x-10  max-w-7xl mx-auto items-start">
                <div className=" py-4 space-y-4 flex flex-col ">
                    <Menubar className=' '> 
                    <MenubarMenu>
                        <MenubarTrigger className=''>
                            <div className=" font-semibold">Create Account</div>
                        </MenubarTrigger>
                        <MenubarContent>
                        <MenubarItem>
                            Instagram <MenubarShortcut> <BsInstagram /> </MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Twitter <MenubarShortcut><BsTwitterX /> </MenubarShortcut>
                        </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <div className=" font-semibold">Create Posts</div>
                        </MenubarTrigger>
                    </MenubarMenu>
                    </Menubar>
                    <div className=" w-full p-4 rounded-md border ">
                        hello People 
                    </div>
                </div>
            </div>

        </div>
        <div className=" grid grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className=" w-full flex flex-col bg-red-300 h-full">
                <Link href={''}>

                </Link>
            </div>
           {
            // @ts-ignore
            // twitterCards.map((twitterCard) => <TwitterCard key={''} twitterCard={twitterCard} />)
           }
        </div>
    </div>
  )
}

export default page