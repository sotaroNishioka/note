import styles from "~/components/pages/Login/index.module.css";
import LoginForm from "~/components/templates/LoginForm";

const Index = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.title}>admin</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
