import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma) as any,
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
	callbacks: {
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				},
			};
		},
		jwt: ({ token, user }) => {
			if (user)
				return {
					...token,
					id: user.id,
				};

			return token;
		},
	},
};
