import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
	const body = await req.json();
	const { email, password } = body;

	if (email === "" || password === "") {
		return NextResponse.json(
			{ error: "Email and password are required" },
			{ status: 400 }
		);
	}

	const user = await db.user.findUnique({
		where: {
			email,
		},
	});

	if (user) {
		return NextResponse.json(
			{ status: "USER_EXISTS", message: "User already exists!" },
			{ status: 400 }
		);
	}

	const newUser = await db.user.create({
		data: {
			email,
			password: await bcrypt.hash(password, 10),
		},
	});

	return NextResponse.json(
		{
			status: "USER_CREATED",
			message: "User created successfully!",
			user: newUser,
		},
		{ status: 200 }
	);
}
