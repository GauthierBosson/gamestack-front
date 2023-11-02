import {Form} from '@remix-run/react';
import {Input} from '~/components/ui/input';
import {Button} from '~/components/ui/button';

export default function Register() {
  return (
    <Form method={'post'}>
      <Input type={'text'} placeholder={'Your userme'} />
      <Input type={'email'} placeholder={'Your email'} />
      <Input type={'password'} placeholder={'Your password'} />
      <Input type={'password'} placeholder={'Confirm your password'} />
      <Button type={'submit'}>Register</Button>
    </Form>
  );
}
