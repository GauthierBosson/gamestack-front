import {Form} from '@remix-run/react';
import {Input} from '~/components/ui/input';
import {Button} from '~/components/ui/button';

export default function Login() {
  return (
    <Form method={'get'}>
      <Input type={'email'} placeholder={'Your email'} />
      <Input type={'password'} placeholder={'Your password'} />
      <Button type={'submit'}>Login</Button>
    </Form>
  );
}
