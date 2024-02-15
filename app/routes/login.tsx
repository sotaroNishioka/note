import type { MetaFunction } from "@remix-run/node";

import LoginForm from "~/components/templates/loginForm/";
import styles from "~/routes/styles/login.module.css";

export const meta: MetaFunction = () => {
  return [{ title: "login" }, { name: "description", content: "admin" }];
};

export default function Index(): JSX.Element {
  return (
    <div className={styles.root}>
      <LoginForm />
    </div>
  );
}
