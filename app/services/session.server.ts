import {createCookieSessionStorage} from '@remix-run/node';
import type {Users} from 'kysely-codegen';
import * as bcrypt from 'bcrypt';
import {db} from '~/database/database';

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET is not set');
}

export async function register(user: {
  username: string;
  email: string;
  password: string;
}) {
  user.password = await bcrypt.hash(user.password, 10);
  return db.insertInto('users').values(user).execute();
}

export async function login(email: string, password: string) {
  const user = await db
    .selectFrom('users')
    .where('email', '=', email)
    .selectAll()
    .executeTakeFirst();

  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email or password does not match');
  }

  return user;
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
