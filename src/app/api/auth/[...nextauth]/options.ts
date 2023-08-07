import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET!,
};
