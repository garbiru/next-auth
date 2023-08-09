"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);
		const formData = Object.fromEntries(form.entries());

		signIn("credentials", {
			redirect: true,
			callbackUrl: "/",
			email: formData.email,
			password: formData.password,
		});
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="shadow-xl border border-gray-200 rounded-md max-w-[1100px] w-3/4">
				<div className="flex">
					<div className="grow basis-1/2 flex flex-col items-center gap-4 px-16 py-5">
						<img src="/logo.png" alt="logo" className="w-1/2 object-contain" />

						<p className="font-lateef text-[2.25rem] leading-8 text-center">
							Your well being...
						</p>

						<div className="flex gap-10">
							<img
								onClick={() => signIn("google", { callbackUrl: "/" })}
								src="/google-logo.svg"
								alt="google"
								className="cursor-pointer"
							/>
							<img
								src="/facebook-logo.svg"
								alt="facebook"
								className="cursor-pointer"
							/>
						</div>

						<span className="text-sm text-gray-400">or enter with:</span>

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
								Login
							</button>
						</form>

						<span>Forgot my password</span>

						<div className="flex items-center gap-5">
							<span>Don't have an account</span>
							<span className="border rounded-lg shadow-md border-blue-500 text-blue-500 py-1 px-2">
								Create account
							</span>
						</div>
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

export default SignIn;
