import Input, { type Props as InputProps } from "~/components/molecules/Input";
import Text from "~/components/atoms/Text";
import React from "react";
import style from "~/components/organisms/InputWithLabel/index.module.css";

interface Props extends InputProps {
  label: string;
}

const InputWithLabel = ({
  label = "",
  icon,
  onChange,
  isError,
  size,
  type,
  variant,
}: Props): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.label}>
        <Text size="strong" type="info">
          {label}
        </Text>
      </div>
      <Input
        icon={icon}
        onChange={onChange}
        isError={isError}
        size={size}
        type={type}
        variant={variant}
      />
    </div>
  );
};

const Index = React.memo(InputWithLabel);
export default Index;
