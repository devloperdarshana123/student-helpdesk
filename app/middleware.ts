import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect(); // ✅ protect ONLY dashboard routes
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
  ],
};
