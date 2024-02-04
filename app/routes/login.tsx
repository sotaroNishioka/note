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
            <p className={styles.description}>コーネルメソッドでかけるメモ帳</p>
          </div>
          <div className={styles.oauth}>
            <a href="/auth/google" className={styles.googleLogin}>
              <div className={styles.googleLogo}></div>
              <p>Googleでログイン</p>
            </a>
          </div>
          <div className={styles.emailLogin}></div>
        </div>
      </div>
    </div>
  );
}
