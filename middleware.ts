// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'fr', 'tr'];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split('/')[1];

  if (pathLocale && !locales.includes(pathLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname.substring(pathLocale.length + 1)}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|icons|fonts).*)'],
};