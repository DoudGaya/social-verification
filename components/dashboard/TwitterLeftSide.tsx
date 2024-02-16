import React from 'react'
import { twitterNavLinks } from '@/lib/listings'
import { UrlLinks } from './UrlLinks'
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image'
import { DashboardUrls,TwitterCardType } from '@/typings'
import Link from 'next/link'


const twitterLogo = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className=" h-8 w-8"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
  )

  
export const TwitterLeftSide = ( { profileData}: { profileData: TwitterCardType } ) => {

const {profileImage, name, username } = profileData

return (
    <div className=" w-3/12 flex flex-col">
    <div className=" flex w-full flex-col px-6 h-full justify-between space-y-8 ">
     <div className="">
        <button className=' rounded-full p-3 mb-4 hover:bg-gray-200 '>
          { twitterLogo }
        </button>
          <div > 
        <ul className=" flex flex-col space-y-3">
        {
          twitterNavLinks.map((url: DashboardUrls ) => {
            return <UrlLinks url={url} />
          })
        }
        <div className="">
          <Link className='w-full py-4 text-white rounded-full bg-blue-500 flex items-center justify-center' href={''}>
            <p className=' font-bold text-xl'>Post</p>
          </Link>
        </div>
      </ul>
     </div>
     </div>

     <div className=" items-center flex py-6">
      <div className=" flex space-x-4 bg-gray-200 rounded-full  p-3 items-center w-full justify-between">
       <div className=" flex space-x-3">
        <Image src={profileImage} className=' rounded-full h-12 w-12' alt="" />
          <div className=" flex items-start justify-start flex-col">
            <p className=' font-bold'> { name} </p>
            <p> { username} </p>
          </div>
       </div>
        <div className="">
          <BsThreeDots className=' h-8 w-8' />
        </div>
      </div>
     </div>
    
    </div>

  </div>
  )
}
