import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";


export async function GET() {
  await connectDB();

  try {
    const users = await User.find(); 
    return NextResponse.json(users, { status: 200 });
  } catch (error: unknown) {
    let message = "An error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}