import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import bannerImage from '@/app/img/banner-image-light.svg'
import bannerImageDark from '@/app/img/banner-image-dark.svg'
import { AuthDialog } from "@/components/AuthDialog";

export default function Home() {
  return (
    <main className="">
    <div className=" h-screen">
    <Navigation />
      <div className=" grid grid-cols-2 h-[70%] mx-auto max-w-6xl gap-x-2">
            <div className="flex space-y-8 flex-col my-auto">
                <h1 className=" text-5xl font-bold "> <p className="text-blue-500">Get Verified.</p>  <p>Take a Screenshot & Share with your friends</p> </h1>
                <div className=" my-4">
                    <AuthDialog />
                </div>
            </div>
            <div className="">
             <Image src={bannerImage} className=" block dark:hidden h-[500px] " alt="" width={1000} height={1000} />
             <Image src={bannerImageDark} className=" hidden dark:block h-[500px] " alt="" width={1000} height={1000} />
            </div>
      </div>
    </div>
    </main>
  );
}
