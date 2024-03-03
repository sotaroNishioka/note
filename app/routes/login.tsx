import type { MetaFunction } from "@remix-run/node";

import LoginPage from "~/components/pages/Login";

export const meta: MetaFunction = () => {
  return [{ title: "login" }, { name: "admin", content: "admin" }];
};

export default function Index(): JSX.Element {
  return <LoginPage />;
}
