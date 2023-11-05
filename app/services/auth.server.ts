import {Authenticator, AuthorizationError} from 'remix-auth';
import type {User} from '~/services/session.server';
import {sessionStorage} from '~/services/session.server';
import {FormStrategy} from 'remix-auth-form';
import {db} from '~/database/database';
import * as bcrypt from 'bcrypt';

export const authenticator = new Authenticator<User | Error>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({form}) => {
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    if (!email || email?.length === 0)
      throw new AuthorizationError('Bad Credentials: Email is required');
    if (typeof email !== 'string')
      throw new AuthorizationError('Bad Credentials: Email must be a string');

    if (!password || password?.length === 0)
      throw new AuthorizationError('Bad Credentials: Password is required');
    if (typeof password !== 'string')
      throw new AuthorizationError(
        'Bad Credentials: Password must be a string',
      );

    const user = await db
      .selectFrom('users')
      .select(['email', 'username', 'password'])
      .where('email', '=', email)
      .executeTakeFirst();

    if (!user) throw new AuthorizationError('Bad Credentials: User not found');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      throw new AuthorizationError(
        'Bad Credentials: Email or password does not match',
      );

    return {
      email: user.email,
      username: user.username,
    };
  }),
  'user-pass',
);
