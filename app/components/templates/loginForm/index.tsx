import styles from "~/components/templates/loginForm/index.module.css";

import Button from "~/components/molecules/Button";
import InputWithLabel from "~/components/organisms/InputWithLabel";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";

const Index = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <InputWithLabel
        label="メールアドレス"
        icon={IoMailOutline}
        type="email"
        size="large"
        variant="contained"
      />
      <InputWithLabel
        label="パスワード"
        icon={IoLockClosedOutline}
        type="password"
        size="large"
        variant="contained"
      />
      <Button>ログイン</Button>
    </div>
  );
};

export default Index;
