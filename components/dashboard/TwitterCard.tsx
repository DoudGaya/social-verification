import React from 'react'
import Image from 'next/image'
import avatar from "@/app/img/avatar.jpg"
import twitterBanner from "@/app/img/twitter-banner.jpg"
import { Button } from '../ui/button'
import { TwitterCardType } from '@/typings'


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { TwitterProfile } from './TwitterProfile'


export const TwitterCard = ({ twitterCard }: {twitterCard: TwitterCardType }) => {
  return (
    <>
    <div className="rounded-lg border ">
      <div style={{ backgroundImage: `url(${twitterCard.banner.src})`}} className="rounded-t-lg bg-center bg-cover bg-blue-500 flex items-center justify-center h-24">
        <h2 className='text-2xl font-bold'></h2>
      </div>
      <div className=" flex border-6 w-full ">
      <div className=" -mt-6 flex flex-col px-4 w-full space-x-2 ">
            <div className=" h-16 w-16 flex-none border-white bg-white p-1 rounded-full ">
                <Image src={twitterCard.profileImage} alt={twitterCard.profileImage.alt} className=' rounded-full' height={700} width={700} />
            </div>
            <div className=" flex w-full line-clamp-1 t flex-col ">
                <p className=' text-lg font-semibold'>{ twitterCard.name }</p>
                <p className=' text-sm'>{ twitterCard.username }</p>
            </div>
            <div className=" py-6 flex w-full justify-between">
              {/* <p>Twitter Profile</p> */}
                <button className=' rounded-full hover:bg-black px-6 bg-gray-900 text-white py-1'>Edit</button>
                <Drawer>
                  <DrawerTrigger>
                      <p className=' rounded-full hover:bg-black px-6 bg-gray-900 text-white py-1'>View</p>
                  </DrawerTrigger>
                  <DrawerContent className='h-screen'>
                   <TwitterProfile profileData={twitterCard} />
                  </DrawerContent>
                </Drawer>
              </div>
      </div>    
    </div>
    </div>
  </>
  )
}
