import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import bannerImage from '@/app/img/banner-image-light.svg'
import bannerImageDark from '@/app/img/banner-image-dark.svg'
import { AuthDialog } from "@/app/AuthDialog";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {

  // @ts-ignore
  const session = await getServerSession(authOptions)
  return (
    <main className="">
    <div className=" h-screen">
    <Navigation />
      <div className=" grid lg:grid-cols-2 grid-cols-1 h-[70%] mx-auto max-w-6xl gap-x-2">
            <div className="flex space-y-8 flex-col my-auto pt-20 text-center lg:text-start px-10">
                <h1 className=" text-4xl  lg:text-5xl font-bold "> <p className="text-blue-500">Get Verified.</p>  <p>Take a Screenshot & Share with your friends</p> </h1>
                <div className=" my-4 px-16">
                      { session ? redirect("/dashboard") : <AuthDialog />}
                </div>
            </div>
            <div className=" px-10">
             <Image src={bannerImage} className=" block dark:hidden h-[500px] " alt="" width={1000} height={1000} />
             <Image src={bannerImageDark} className=" hidden dark:block h-[500px] " alt="" width={1000} height={1000} />
            </div>
      </div>
    </div>
    </main>
  );
}
