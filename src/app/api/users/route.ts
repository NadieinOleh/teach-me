import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();

  try {
    const newUser = await User.create(body);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error: unknown) {
    let message = "An error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}
