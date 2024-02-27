import styles from "~/components/templates/loginForm/index.module.css";

import Button from "~/components/molecules/Button";
import Input from "~/components/molecules/Input";
import { Bs0Circle } from "react-icons/bs";

const Index = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>admin</p>
        </div>
        <div className={styles.oauth}>
          <Button>Googleでログイン</Button>
          <Button icon={Bs0Circle}>Googleでログイン</Button>
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
