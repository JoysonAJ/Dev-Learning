import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
   // Routes that can be accessed while signed out
   // Anyone can visit the route
   publicRoutes: ['/'],
   // Routes that can always be accessed, and have
   // no authentication information
   ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
   // Protects all routes, including api/trpc.
   // See https://clerk.com/docs/references/nextjs/auth-middleware
   // for more information about configuring your Middleware
   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//    darkMode: ['class'],
//    content: [
//       './pages/**/*.{ts,tsx}',
//       './components/**/*.{ts,tsx}',
//       './app/**/*.{ts,tsx}',
//       './src/**/*.{ts,tsx}',
//    ],

//    plugins: [
//       require('tailwindcss-animate'),
//       require('@tailwindcss/typography'),
//    ],
// };
