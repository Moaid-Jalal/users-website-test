// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// قائمة اللغات المدعومة
const locales = ['en', 'fr', 'tr'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split('/')[1];

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // إذا كانت اللغة غير موجودة في القائمة، إعادة التوجيه للغة الافتراضية (مثلاً 'en')
  if (pathLocale && !locales.includes(pathLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname.substring(pathLocale.length + 1)}`; // إعادة التوجيه مع الحفاظ على باقي المسار
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // الاستمرار في المعالجة لو كانت اللغة صحيحة
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|icons|fonts).*)'], // تحديد المسارات التي يتم تطبيق الـ middleware عليها
};
