import {createCookieSessionStorage} from '@remix-run/node';
import type {Users} from 'kysely-codegen';

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET is not set');
}
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_gamestack',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
});

export type User = Pick<Users, 'username' | 'email'>;

export const {getSession, commitSession, destroySession} = sessionStorage;
