import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "../types/IUser";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:
            {
                email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise< IUser | null> {
                const { email, password } = credentials || {}
                console.log(email, password)
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }

            }
        })
    ],

    // pages:{
    //     signIn: "/login",
    //     error: "/login"
    // },

    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },

        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        }
    }
})

export { handler as GET, handler as POST }