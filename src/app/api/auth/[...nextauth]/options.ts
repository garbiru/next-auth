import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession, type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import colors from "colors/safe";

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(db) as any,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { email, password }: any = credentials;

				try {
					const user = await db.user.findUnique({
						where: {
							email: email,
						},
					});

					if (!user) {
						return null;
					}

					const isValid = await bcrypt.compare(password, user.password!);

					if (!isValid) {
						return null;
					}

					return user as any;
				} catch (error) {
					console.log(error);
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET!,
	callbacks: {
		session: ({ session, token }) => {
			console.log(colors.red("ses token"), token);

			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					role: token.role,
				},

			};
		},
		jwt: async ({ token, user }) => {
			// The first time this is called, the user comes with all the properties from the database, so we don't need to do anything
			console.log(colors.yellow("JWT user"), user);

			if (user) {
				return {
					id: user.id,
					role: user.role,
				};
			}

			return token;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
};

// This is a easier way to get the session
export const getAuthSession = () => getServerSession(options);
