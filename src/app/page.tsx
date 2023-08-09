import { getServerSession } from "next-auth";
import { getAuthSession, options } from "@/app/api/auth/[...nextauth]/options";

export default async function Home() {
	//This gets the session on the server side
	// const session = await getServerSession(options);
	const session = await getAuthSession();

	// console.log(session);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="font-bold text-[50px]">HOME PAGE</h1>
				{JSON.stringify(session, null, 2)}
			</div>
		</main>
	);
}
