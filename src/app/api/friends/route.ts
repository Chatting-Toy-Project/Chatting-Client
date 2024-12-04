import { friendsDummy } from "./dummy";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET friends");
  return NextResponse.json({ data: friendsDummy });
}

export async function POST(req: Request) {
  // const { userEmail, password } = await req.json();
  // return NextResponse.json({ token, userEmail: userEmail });
}
