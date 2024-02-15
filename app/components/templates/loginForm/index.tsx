import styles from "~/components/templates/loginForm/index.module.css";

import { BsGoogle } from "react-icons/bs";

const Index = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>admin</p>
        </div>
        <div className={styles.oauth}>
          <a href="/auth/google" className={styles.googleLogin}>
            <BsGoogle />
            Googleでログイン
          </a>
        </div>
        <div className={styles.emailLogin}></div>
      </div>
    </div>
  );
};

export default Index;
