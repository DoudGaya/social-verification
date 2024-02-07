import React from 'react'
import { Button } from '../ui/button'
import {
  DrawerClose,
  } from "@/components/ui/drawer"

export const TwitterProfile = ( { profileData}: { profileData: TwitterCard } ) => {
  return (
    <div>
     <div className="flex h-screen flex-row ">
      <div className=" w-3/12 bg-red-300">
        Hello
      </div>
      <div className=" w-5/12 bg-purple-400">
        Hello
      </div>
      <div className=" w-4/12 bg-green-300">
        Hello
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
