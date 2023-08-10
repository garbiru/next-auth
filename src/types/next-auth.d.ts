import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			role: string;
		} & DefaultSession;
	}

	// Here we can add more properties to the user object, so in options.js ts doesn't complain about User not having certain attributes
	interface User extends DefaultUser {
		role: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		role: string;
	}
}
