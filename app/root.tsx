import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Theme } from "node_modules/@radix-ui/themes/dist/esm/theme";

import "@radix-ui/themes/styles.css";
import "~/theme-config.css";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Theme>
      </body>
    </html>
  );
}
