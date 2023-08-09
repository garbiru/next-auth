"use client";

import { useRouter } from "next/navigation";

const SignUp = () => {
	const router = useRouter();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);
		const formData = Object.fromEntries(form.entries());

		const response = await fetch("/api/register", {
			method: "POST",
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			const { message } = await response.json();
			alert(message);
			return;
		}

		//TODO: redirect to login page or other page
		router.replace("/auth/signin");
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="shadow-xl border border-gray-200 rounded-md max-w-[1100px] w-3/4">
				<div className="flex">
					<div className="grow basis-1/2 flex flex-col items-center gap-4 px-16 py-5">
						<img src="/logo.png" alt="logo" className="w-1/2 object-contain" />

						<p className="font-lateef text-[2.25rem] leading-8 text-center">
							Create a new account
						</p>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-5 w-full"
						>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="Email"
							/>
							<input
								type="password"
								name="password"
								id="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="Password"
							/>

							<button className="bg-blue-500 text-white font-bold rounded-lg py-1.5 px-2">
								Register
							</button>
						</form>
					</div>
					<div className="grow basis-1/2 bg-login-gradient bg-auto bg-no-repeat rounded-md hidden lg:flex flex-col justify-center gap-6 p-10 text-white">
						<h1 className="text-[3rem] font-lateef">MindcareHub</h1>
						<p className="font-lateef text-[1.25rem]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
							eveniet. Doloribus blanditiis tempore quasi facilis velit, nobis
							recusandae commodi consequatur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
