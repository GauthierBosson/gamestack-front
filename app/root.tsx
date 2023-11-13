import styles from './tailwind.css';
import {cssBundleHref} from '@remix-run/css-bundle';
import type {LinksFunction, LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import Navbar from '~/components/Navbar';
import {authenticator} from '~/services/auth.server';
import {themeSessionResolver} from '~/services/session.server';
import {PreventFlashOnWrongTheme, ThemeProvider, useTheme} from 'remix-themes';
import {clsx} from 'clsx';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
  {rel: 'stylesheet', href: styles},
];

export async function loader({request}: LoaderFunctionArgs) {
  let user = await authenticator.isAuthenticated(request);
  const {getTheme} = await themeSessionResolver(request);

  if (user instanceof Error || !user) {
    return json({user: null, theme: getTheme()});
  }

  return json({user, theme: getTheme()});
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction={'/action/set-theme'}>
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <header
          className={'container mx-auto py-4 sticky top-0 left-0 right-0 z-10'}>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
