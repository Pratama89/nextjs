import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CreadentialsProvider  from "next-auth/providers/credentials";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CreadentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                fullname: { label: "Fullname", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
               const { email, password, fullname } = credentials as {
                   email: string;
                   password: string;
                   fullname: string;
               };
               const user: any = { id: "1", email: email, password: password, fullname: fullname};
               if (user) {
                // console.log(user);
                   return user;
               } else {
                   return null;
               }
            }
        })
    ],
    callbacks: {
        jwt({token, account, profile, user}: any){
            if (account?.provider === "credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
            }
            // console.log(token);
            return token;
        },
        async session({session, token}: any){
            if ("email" in token) {
                session.user.email = token.email
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname
            }
            // console.log(session, token);
            return session;
        },
    },
};

export default NextAuth(authOption);