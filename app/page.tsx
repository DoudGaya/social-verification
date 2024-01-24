import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import bannerImage from '@/app/img/banner-image-light.svg'
import bannerImageDark from '@/app/img/banner-image-dark.svg'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="">
    <div className=" h-screen">
    <Navigation />
      <div className=" grid grid-cols-2 h-[70%] mx-auto max-w-6xl gap-x-2">
            <div className="flex space-y-8 flex-col my-auto">
                <h1 className=" text-5xl font-bold "> <p className="text-blue-500">Get Verified.</p>  <p>Take a Screenshot & Share with your friends</p> </h1>
                <div className=" my-4">
                      <Dialog>
                      <DialogTrigger>
                        <div className=" font-semibold bg-blue-500 rounded-full px-6 py-2">
                          Get Started for free
                        </div>
                      </DialogTrigger>
                     <div className="">
                      <DialogContent className="">
                          <DialogHeader>
                            <DialogTitle className=" my-6 flex justify-center">
                              <div className=" text-xl">Create an Account</div>
                            </DialogTitle>
                            <DialogDescription>
                                <LoginForm />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                     </div>
                    </Dialog>

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
