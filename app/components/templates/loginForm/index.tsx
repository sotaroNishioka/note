import styles from "~/components/templates/loginForm/index.module.css";

import Button from "~/components/atoms/button";
import { BsGoogle } from "react-icons/bs";
import Input from "~/components/atoms/input";

const Index = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>admin</p>
        </div>
        <div className={styles.oauth}>
          <Button icon={BsGoogle}>Googleでログイン</Button>
        </div>
        <div className={styles.emailLogin}>
          <Input
            onChange={(event) => {
              console.log(event.target.value);
            }}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
