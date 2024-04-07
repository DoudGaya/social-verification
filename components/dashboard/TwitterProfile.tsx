import React from 'react'
import { Button } from '../ui/button'
import { DrawerClose } from "@/components/ui/drawer"
import { TwitterCardType } from '@/typings'
import Link from 'next/link'
import { TwitterLeftSide } from './TwitterLeftSide'
import { TwitterMainContents } from './TwitterMainContents'



export const TwitterProfile = ( { profileData}: { profileData: TwitterCardType } ) => {
  return (
    <div className=' h-screen'>
     <div className="flex h-full max-w-7xl mx-auto flex-row ">
     <TwitterLeftSide profileData={profileData} />
        <TwitterMainContents profileData={profileData} />
        <div className=" w-3/12 flex flex-col px-6 ">
          <div className="">
            
            <input type="text" className='' />
          </div>
        </div>
        </div>
        <div className="absolute right-0 bottom-0 p-2">
          <DrawerClose>
            <Button variant="outline">X</Button>
          </DrawerClose>
        </div>
    </div>
  )
}
