import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const currentSearch = req.nextUrl.search;
  const token = req.cookies.get("kg_access_token");

  // 로그인 상태가 아닐 때만 접근할수 있는 경로
  const notAuthRoute = ["/", "/login", "/login/email", "/join"];

  // 비회원일시에는 authRoute내에만 접근할수 있다.
  if (!token && !notAuthRoute.includes(currentPath)) {
    return NextResponse.redirect(new URL(`/`, req.url));
  }

  // 로그인 되어있을시 authRoute내에는 접근할수 없다.
  if (token && notAuthRoute.includes(currentPath)) {
    return NextResponse.redirect(new URL("/friends", req.url));
  }

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
