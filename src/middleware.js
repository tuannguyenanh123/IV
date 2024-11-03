import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { StorageKeys } from './constants/storage-keys';
import { fallbackLng, languages } from './app/i18n/settings';

// const rootPath = '/';
const cookieName = StorageKeys.Lang;

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|data|images|assets|favicon.ico|sw.js).*)'],
};

// const unauthenticatedPaths = ['/login', '/register', '/forgot', '/reset-password', '/forgot-password', '/oauth/facebook', '/oauth/google'];
// const clearSessionPaths = ['/reset-password', '/oauth/facebook', '/oauth/google'];
const publicPaths = ['/docs'];

export function middleware(req) {
  let lng;
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // const response = NextResponse.next();
  // const isRootPath = rootPath === req.nextUrl.pathname;
  // const isUnauthenticatedPath = unauthenticatedPaths.find(path => new RegExp(`${path}$`).test(req.nextUrl.pathname));
  const isPublic = publicPaths.find(path => new RegExp(`${path}$`).test(req.nextUrl.pathname));

  if (isPublic) {
    return NextResponse.next();
  }

  if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();

  // // Redirect to /login if unauthenticated
  // if (!isPublic && !req.cookies.has(StorageKeys.AccessToken) && !isUnauthenticatedPath) {
  //   const responseRedirect = NextResponse.redirect(new URL('/login', req.url));
  //   return responseRedirect;
  // }

  // // Redirect to / if already authenticated
  // if (!isPublic && req.cookies.has(StorageKeys.AccessToken) && (isUnauthenticatedPath || isRootPath)) {
  //   if (!!clearSessionPaths.find(path => new RegExp(path).test(req.nextUrl.pathname))) {
  //     response.cookies.delete(StorageKeys.AccessToken);
  //     response.cookies.delete(StorageKeys.UserInfo);
  //     return response;
  //   }

  //   return NextResponse.redirect(new URL(rootPath, req.url));
  // }

  // return response;
}
