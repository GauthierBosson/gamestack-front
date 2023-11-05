import {Form, useLoaderData} from '@remix-run/react';
import {Input} from '~/components/ui/input';
import {Button} from '~/components/ui/button';
import type {ActionFunctionArgs, LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {authenticator} from '~/services/auth.server';
import {Label} from '~/components/ui/label';
import {getSession} from '~/services/session.server';

export default function Login() {
  const data = useLoaderData<typeof loader>();

  console.log(data);
  return (
    <>
      {data.error?.message && <p>{data.error.message}</p>}
      <Form method={'post'}>
        <Label htmlFor={'email'}>Email</Label>
        <Input type={'email'} name={'email'} placeholder={'Your email'} />
        <Label htmlFor={'password'}>Password</Label>
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Your password'}
        />
        <Button type={'submit'} className={'mt-2'}>
          Login
        </Button>
      </Form>
    </>
  );
}

export async function loader({request}: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/dashboard',
  });
  let session = await getSession(request.headers.get('Cookie'));
  let error = session.get(authenticator.sessionErrorKey);
  return json({error});
}

export async function action({request}: ActionFunctionArgs) {
  return await authenticator.authenticate('user-pass', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
}
