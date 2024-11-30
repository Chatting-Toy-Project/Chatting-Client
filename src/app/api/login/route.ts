import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdF91c2VyIiwiZXhwIjoxNzM1NjAzMjAwLjB9.sLZYxtbBuQQ6NcWxoaL-jk6kq4PrL05iCZEKbPxJbtI";

export async function GET() {
  return NextResponse.json({ token });
}

export async function POST(req: Request) {
  const { userEmail, password } = await req.json();
  return NextResponse.json({ token, userEmail: userEmail });
}
