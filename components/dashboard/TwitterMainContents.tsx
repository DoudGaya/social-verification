import React from 'react'
import { TwitterCardType } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'

const profileNav = [
    'Posts',
    'Replies',
    'Highlights',
    'Media',
    'Likes',
    ]


export const TwitterMainContents = ( { profileData}: { profileData: TwitterCardType }  ) => {
  return (
    <div className=" w-6/12 border-x-2 flex flex-col">
    <header className="w-full flex pb-2 px-6 space-x-6">
      <button className=' '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="">
       <p className=' font-bold text-lg'>{ profileData.name}</p>
        <div className=' text-sm'>{profileData.numberOfPosts} Posts</div>
      </div>
    </header>
    <div className=" bg-cover bg-center h-[200px]" style={{ backgroundImage: `url(${profileData.banner.src})` }}></div>
      <div className=" flex justify-between px-6">
        <Image src={ profileData.profileImage } className=' h-[130px] border-4 border-white w-[130px] rounded-full -mt-20 ' alt="" />
        <div className=" py-2 flex space-x-3">
          <button className=' rounded-full p-2 border-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>

          <button className=' rounded-full p-2 border-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </button>
          <button className=' border-2 bg-black text-white px-8 font-semibold py-1 rounded-full border-gray-350'>Follow</button>
        </div>
      </div>
      <div className="pl-10 text-balance pt-3 text-slate-700">
        <div className='text-lg relative max-w-max font-bold'>
            <p className=''> { profileData.name } </p> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 absolute fill-blue-500 -top-3 -right-5">
              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
            </svg>
        </div>
      <div className='text-lg'>{ profileData.username } </div>

          <div className="w-full flex">
            <p className='w-full'>{ profileData.bio }</p>
          </div>

            <div className="flex py-3 flex-wrap space-x-3">
              <Link href={''} className=" flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-slate-700 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  <p >{ profileData.occupation }</p>
              </Link>
                <Link href={''} className=" flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                  <p> { profileData.location } </p>
                </Link>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <Link href={''} className=" flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clipRule="evenodd" />
                </svg>
                  <p className='text-blue-600' >{ profileData.url }</p>
              </Link>
                <Link href={''} className=" flex space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                  <p> { profileData.location } </p>
                </Link>
                <Link href={''} className=" flex space-x-1, ln, nn n /">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                  <p> { profileData.dateJoined } </p>
                </Link>
            </div>
      </div>
      <div className=" flex space-x-4 px-10">
        <p> <span className=' font-bold'>{ profileData.following } </span> Following</p>
        <p> <span className=' font-bold'>{ profileData.followers } </span> Followers</p>
      </div>

      <div className=" w-full border-b-2 mt-4 items-center px-8 grid grid-cols-5">
       {
        profileNav.map((nav) => <Link key={nav} className={`flex justify-center text-center font-semibold text-gray-600 hover:bg-gray-200 rounded-sm`} href={ nav }> <p className={` border-b-4 py-3 ${nav.toLowerCase() === 'posts' ? 'border-blue-500' : 'border-transparent'} `}> {nav}</p> </Link>)
       }
      </div>
      <div className=" px-6 py-3">
       <div className="flex flex-col">
        <div className=" flex space-x-3 w-full">
          <Image src={ profileData.profileImage} className=' h-10 w-10 rounded-full' alt='' />
          <div className=" flex w-full justify-between">
          <div className=" flex flex-col w-full">
            <div className=" flex space-x-2">
                <p className=' font-semibold '> { profileData.name} </p>
                <p className=''>{profileData.username} </p>
            </div>
            <div className=" flex w-full flex-col space-y-2">
              <p>{profileData.pinnedPost.body}</p>
                <Image className=' h-[200px] rounded-lg w-full object-center object-cover' src={profileData.pinnedPost.image} alt='' />
            </div>
          </div>
          
          <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
          </div>
          </div>
        </div>
       </div>
      </div>
  </div>
  )
}
