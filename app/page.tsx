import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import bannerImage from '@/app/img/banner-image-light.svg'
import bannerImageDark from '@/app/img/banner-image-dark.svg'
import { AuthDialog } from "@/app/AuthDialog";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import  authOptions from "./api/auth/[...nextauth]/route"


import facebook from '@/app/img/facebook.png'
import instagram from '@/app/img/instagram.png'
import twitter from '@/app/img/twitter.png'


const socialComponents = [ 
  {
    id: 1,
    img: facebook,
    name: 'Facebook'
  }

,{
  id: 2,
    img: instagram,
    name: 'Instagram'
  }, 

  {
    id: 3,
    img: twitter,
    name: 'Twitter'
  }
]

export default async function Home() {

  // @ts-ignore
  const session = await getServerSession(authOptions)
  return (
    <main className="">
    <div className=" h-screen">
    <Navigation />
      <div className=" grid lg:grid-cols-2 grid-cols-1 h-[70%] mx-auto max-w-6xl gap-x-2">
            <div className="flex space-y-8 flex-col my-auto pt-20 text-center lg:text-start ">
                <h1 className=" text-4xl  lg:text-5xl font-bold flex flex-col space-y-4 "> 
                <p className="text-blue-500 ">Get Verified.</p>  
                <p className="">Take a Screenshot & Share with your friends</p> </h1>
                <div className=" my-4">
                      { session ? redirect("/dashboard") : <AuthDialog />}
                </div>
            </div>
            <div className=" px-10">
             <Image src={bannerImage} className=" block dark:hidden h-[500px] " alt="" width={1000} height={1000} />
             <Image src={bannerImageDark} className=" hidden dark:block h-[500px] " alt="" width={1000} height={1000} />
            </div>
      </div>
      <div className="">
       
      </div>
    </div>
      <div className=" w-full mx-auto justify-center py-10 max-w-6xl">
       <div className=" flex text-center max-w-4xl space-y-6 mx-auto w-full items-center flex-col justify-center">
       <h1 className=" text-2xl font-semibold ">About Social Verification</h1>
        <p className=" text-lg">
          Social Verification App is designed to help you faked-verify your social media handles, 
          facebook, instagram, Linkedln and others for free.  
        </p>
       <div className=" flex flex-row py-6 h-full w-full bg-blue-400">
        {
          socialComponents.map((item) => <Image src={item.img} className=" h-20 rounded-lg object-cover object-center" key={item.id} alt="Social verification " /> )
        }
       </div>
       </div>
      </div>
    </main>
  );
}



