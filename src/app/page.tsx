import LoginButton from "./components/LoginButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="font-bold text-[50px]">SIGNUP AND LOGIN</h1>
				<LoginButton />
			</div>
		</main>
	);
}
