import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LoginButton from "./components/LoginButton";

export default async function Home() {
	//This gets the session on the server side
	const session = await getServerSession(options);

	console.log(session);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="font-bold text-[50px]">SIGNUP AND LOGIN</h1>
				<LoginButton />
			</div>
		</main>
	);
}
