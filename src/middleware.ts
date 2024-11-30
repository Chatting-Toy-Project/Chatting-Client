import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware } from "./middleware/authMiddleware";

export async function middleware(req: NextRequest) {
  // 특정 경로에 대해서는 인증을 건너뛰고 즉시 다음 단계로
  // if (req.nextUrl.pathname.startsWith("/특정")) {return NextResponse.next();}

  // 인증 미들웨어 실행
  const authResponse = authMiddleware(req);
  if (authResponse !== NextResponse.next()) {
    return authResponse;
  }

  // 그외 처리
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/login/email",
    "/join",
    "/friends",
    "/chatlists",
    "/chatting/:path*",
  ],
};
