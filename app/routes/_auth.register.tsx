import {Form, useActionData} from '@remix-run/react';
import {Input} from '~/components/ui/input';
import {Button} from '~/components/ui/button';
import type {ActionFunctionArgs} from '@remix-run/node';
import {json, redirect} from '@remix-run/node';
import {z} from 'zod';
import {Label} from '~/components/ui/label';
import {register} from '~/services/session.server';

export default function Register() {
  const data = useActionData<typeof action>();

  return (
    <Form method={'post'}>
      <Label htmlFor={'username'}>Username</Label>
      <Input
        type={'text'}
        name={'username'}
        placeholder={'Your username'}
        required
      />
      {data && data.error.username && <p>{data.error.username._errors[0]}</p>}
      <Label htmlFor={'email'}>Email</Label>
      <Input
        type={'email'}
        name={'email'}
        placeholder={'Your email'}
        required
      />
      {data && data.error.email && <p>{data.error.email._errors[0]}</p>}
      <Label htmlFor={'password'}>Password</Label>
      <Input
        type={'password'}
        name={'password'}
        placeholder={'Your password'}
        required
      />
      {data && data.error.password && <p>{data.error.password._errors[0]}</p>}
      <Label htmlFor={'confirm_password'}>Confirm your password</Label>
      <Input
        type={'password'}
        name={'confirm_password'}
        placeholder={'Confirm your password'}
        required
      />
      {data && data.error.confirm_password && (
        <p>{data.error.confirm_password._errors[0]}</p>
      )}
      <Button type={'submit'}>Register</Button>
    </Form>
  );
}

export async function action({request}: ActionFunctionArgs) {
  const body = Object.fromEntries(await request.formData());

  //TODO: Move this to session.server.ts
  const registerSchema = z
    .object({
      username: z
        .string({
          invalid_type_error: 'Username must be a string',
          required_error: 'Username is required',
        })
        .min(3, {message: 'Username must be at least 3 characters long'}),
      email: z
        .string({required_error: 'email is required'})
        .email({message: 'Invalid email'}),
      password: z
        .string({required_error: 'Password is required'})
        .min(8, {message: 'Password must be at least 8 characters long'}),
      confirm_password: z
        .string({required_error: 'Password confirmation is required'})
        .min(8, {message: 'Password must be at least 8 characters long'}),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: 'Passwords must match',
      path: ['confirm_password'],
    });

  const result = registerSchema.safeParse(body);

  if (!result.success) {
    return json({error: result.error.format()});
  }

  // Delete confirm_password from the object
  const {confirm_password, ...dbUser} = result.data;

  try {
    await register(dbUser);
  } catch (error) {
    return console.error(error);
  }

  return redirect('/login');
}
