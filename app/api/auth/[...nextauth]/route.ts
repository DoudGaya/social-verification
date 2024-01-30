import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize() {
                const user = { id: '1'};
                return user;
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
// @ts-ignore
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}