import { Outlet } from 'react-router';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Soar Front-End Task</title>
        <link rel="icon" href="/android-icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
