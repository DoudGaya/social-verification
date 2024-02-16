import { DashboardUrls } from '@/typings'
import React from 'react'

export const UrlLinks = ({ url}: { url: DashboardUrls }) => {
  return (
    <div className=" w-full flex ">
        <div className=' flex p-2 pl-3 pr-4 py-2 rounded-full items-center hover:bg-gray-100 space-x-6'>
        { url.icon }
        <p className=' text-2xl'>{ url.name }</p>
    </div>
    </div>
  )
}
