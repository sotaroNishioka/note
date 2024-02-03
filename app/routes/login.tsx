import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import styles from "~/routes/styles/login.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "login - note" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.title}>Kakioki</p>
            <p className={styles.description}>
              コーネルメソッドで学習をサポート
            </p>
          </div>
          <div className={styles.oauth}>
            <a href="/auth/google">Googleアカウントでログイン</a>
          </div>
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Search the docs…" size="1" />
          </TextField.Root>
        </div>
      </div>
    </div>
  );
}
