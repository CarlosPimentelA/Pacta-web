// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define qué rutas son públicas (no requieren login)
const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/sign/(.*)',    // ← las rutas donde el cliente firma el contrato
]);

export default clerkMiddleware(async (auth, request) => {
    const { userId, redirectToSignIn } = await auth();

    if (!isPublicRoute(request) && !userId) {
        return redirectToSignIn({ returnBackUrl: request.url });
    }
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};