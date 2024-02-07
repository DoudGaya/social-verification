"use client"
import { DashboardNavigation } from '@/components/ui/DashboardNavigation'
import React from 'react'
import { twitterCards } from '@/lib/utils'



import { BsTwitterX } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

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
        <div className=" flex flex-col w-full">
            <div className=" mx-auto">
            <Menubar className=''> 
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
            </div>

        </div>
        <div className=" w-full border-b my-4 max-w-7xl mx-auto"></div>
        <div className=" grid grid-cols-4 gap-6 max-w-7xl mx-auto">
           {
            // @ts-ignore
            twitterCards.map((twitterCard: TwitterCard) => <TwitterCard twitterCard={twitterCard} />)
           }
        </div>
    </div>
  )
}

export default page