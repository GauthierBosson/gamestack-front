import {Authenticator} from 'remix-auth';
import {sessionStorage} from '~/services/session.server';
import {FormStrategy} from 'remix-auth-form';

type User = {
  email: string;
  password: string;
};

export const authenticator = new Authenticator<User>(sessionStorage);

export const formStrategy = new FormStrategy(async ({form}) => {
  const email = form.get('email');
  const password = form.get('password');

  const user;
});
