import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { Toaster } from 'sonner';
import appCss from '../styles.css?url';
import type { QueryClient } from '@tanstack/react-query';
import NotFound from '@/components/NotFound';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
// import TanstackQueryLayout from '../integrations/tanstack-query/layout';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dhamivibez',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: 'favicon.ico',
        type: 'image/x-icon',
      },
    ],
  }),

  component: () => (
    <RootDocument>
      <Outlet />
      {/* <TanStackRouterDevtools />
      <TanstackQueryLayout /> */}
    </RootDocument>
  ),
  notFoundComponent: () => <NotFound />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="max-w-full bg-gray-950">
        <Toaster
          position="top-center"
          expand
          toastOptions={{ style: { background: '#030712', borderColor: 'rgba(255, 255, 255, 0.05)', color: 'white' } }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
