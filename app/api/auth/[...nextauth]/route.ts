
import NextAuth from "next-auth/next";
import authOptions from "@/lib/config/auth/authOptions";
const handler = NextAuth(authOptions) as never
export {handler as GET, handler as POST}