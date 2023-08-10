"use client";

import { signOut, signIn } from "next-auth/react";

const SignoutButton = ({ session }: any) => {
	return (
		<button
			className="bg-blue-400 py-1 px-2 text-white rounded-md"
			onClick={() => (session ? signOut() : signIn())}
		>
			{session ? "Sign Out" : "Sign In"}
		</button>
	);
};

export default SignoutButton;
