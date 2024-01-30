"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { RegisterForm } from "@/components/RegisterForm";
  import { LoginForm } from './LoginForm';


export const AuthDialog = () => {
    const [currentAuthModal, setCurrentAuthModal] = useState(true)

    const changeCurrentAuth = () => {
        setCurrentAuthModal((prev) => {
            return !prev
        })
    }

  return (
   <div className="">
    <Dialog>
        <DialogTrigger>
        <div className="font-semibold bg-blue-500 rounded-full px-6 py-2">
            Get Verified for free
        </div>
        </DialogTrigger>
        <div className="">
        <DialogContent className=" max-w-sm">
            <DialogHeader>
            <DialogTitle className=" my-6 flex justify-center">
                <div className=" text-xl">{ currentAuthModal ? "Create an Account" : "Log In"}</div>
            </DialogTitle>
            <DialogDescription>
               {currentAuthModal ?  <RegisterForm currentAuth={setCurrentAuthModal} /> : <LoginForm />}
            </DialogDescription>
            </DialogHeader>
            <div className=" flex items-center text-black justify-between w-full justify-items-center">
                <p className=' text-sm'>{currentAuthModal ? "Already have an account?": " Don't have an account"}</p>
                <button className='text-black font-bold' onClick={changeCurrentAuth} >{currentAuthModal ? 'Log In' : 'Register'}</button>
            </div>
        </DialogContent>
        </div>
    </Dialog>
   </div>
  )
}
