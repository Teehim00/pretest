import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/login(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const authResult = await auth();
  const { userId } = authResult;

  
  if (!isPublicRoute(req) && !userId) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }


  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", 
    "/(api|trpc)(.*)", 
  ],
};
