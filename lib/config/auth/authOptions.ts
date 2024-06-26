import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize( credentials) {
                // @ts-ignore
                const {email, password} = credentials
                try {
                    await connectMongoDB()
                    const user = await User.findOne({email})
                    if (!user) return null
                    const passwordCheck = await bcrypt.compare(password, user.password)
                    if (!passwordCheck) return null
                    return user
                } catch (error) {
                    console.log("Error:", error) 
                }
               
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}

// export default authOptions