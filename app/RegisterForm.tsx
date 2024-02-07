"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Must be a valid email"
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function RegisterForm( {currentAuth}: any ) {

  const [serverError, setServerError] = useState('')
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",

    },
  })

  
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {

    const {fullName, email, password} = values

    try {
    
      const checkIfUserExist = await fetch("/api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      })
 
      const {user} = await checkIfUserExist.json()

      if (user) {
        setServerError("User Already Exist. Please Log In")
      }
      const res = await fetch('api/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      })
      })

      if (res.ok) {
        form.reset()
       currentAuth((prev: any) => {
        return !prev
       })
      } else {
        console.log("Registration failed")
      }
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Form {...form}>
      <div className=" flex justify-center w-full">
       { serverError && (<p className=" text-red-700 font-semibold pb-6">{ serverError }</p>) }
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 gap-2">
      <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


       <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="" placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

       <div className=" flex w-full justify-center">
        <Button  type="submit" className=" px-6 w-full">
        <svg className="animate-spin stroke-orange-100 h-5 w-5 mr-3 " viewBox="0 0 24 24">

        </svg>
          Create an Account
          </Button>
       </div>
      </form>
    </Form>
  )
}
