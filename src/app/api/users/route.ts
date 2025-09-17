import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  const { name, classNumber } = body;

  try {
    let user = await User.findOne({ name });

    if (!user) {
      user = await User.create({ name, classNumber });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: unknown) {
    let message = "An error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const users = await User.find(); // достаем всех
    return NextResponse.json(users, { status: 200 });
  } catch (error: unknown) {
    let message = "An error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}