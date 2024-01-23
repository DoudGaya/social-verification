import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
    <div className=" h-screen">
    <Navigation />
      <div className=" grid grid-cols-2 h-[70%] mx-auto max-w-6xl gap-x-2">
            <div className="flex space-y-8 flex-col my-auto">
              <h1 className=" text-5xl font-bold "> <p className="text-blue-500">Get Verified.</p>  <p>Take a Screenshot & Share with your friends</p> </h1>
           <div className=" my-4">
           <Link href={''} className=" font-semibold bg-blue-500 rounded-full px-6 py-2">
              Get Started for free
            </Link>
           </div>
            </div>
          </div>
          <div className=""></div>
    </div>
    </main>
  );
}
