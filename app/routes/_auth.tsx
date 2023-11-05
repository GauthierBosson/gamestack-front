import {Outlet} from '@remix-run/react';

export default function AuthLayout() {
  return (
    <section className={'container grid place-items-center h-[100vh]'}>
      <div className={'border border-black rounded-md p-8 min-w-[400px]'}>
        <Outlet />
      </div>
    </section>
  );
}
