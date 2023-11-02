import {createCookieSessionStorage} from '@remix-run/node';

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET is not set');
}
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'gamestack',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
});

export const {getSession, commitSession, destroySession} = sessionStorage;
