
import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/config/auth/authOptions";

// @ts-ignore
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST, authOptions}