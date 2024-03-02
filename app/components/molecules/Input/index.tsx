import style from "~/components/molecules/Input/index.module.css";
import React, { useMemo, useState } from "react";
import { type IconType } from "react-icons";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Input from "~/components/atoms/Input";
import { type Props as InputProps } from "~/components/atoms/Input";

export interface Props extends InputProps {
  variant?: "underline" | "contained";
  isError?: boolean;
  icon?: IconType;
}

const InputElement = ({
  onChange,
  size = "medium",
  type = "text",
  variant = "contained",
  isError = false,
  icon,
}: Props): JSX.Element => {
  // iconをdomで利用できる大文字に変換
  const Icon = icon;

  // パスワードを表示するかどうかの状態を管理
  const [isShowPassword, setIsShowPassword] = useState(false);

  // typeとisShowPasswordの状態によってパスワードを表示するかどうかを切り替える
  const typeValue = useMemo(() => {
    if (type === "password" && isShowPassword) {
      return "text";
    }
    return type;
  }, [type, isShowPassword]);

  // パスワードを表示するかどうかの状態を切り替える関数
  const handleShowPassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  // バリエーションによってスタイルを変更
  const variantStyle = useMemo(() => {
    switch (variant) {
      case "underline":
        return style.underline;
      case "contained":
        return style.contained;
      default:
        return style.contained;
    }
  }, [variant]);

  // サイズによってスタイルを変更
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "small":
        return style.small;
      case "medium":
        return style.medium;
      case "large":
        return style.large;
      default:
        return style.medium;
    }
  }, [size]);

  // タイプによってスタイルを変更
  const typeStyle = useMemo(() => {
    switch (type) {
      case "text":
        return style.text;
      case "password":
        return style.password;
      case "email":
        return style.email;
      default:
        return style.text;
    }
  }, [type]);

  const isErrorStyle = useMemo(() => {
    if (variant === "contained") {
      return style.errorOutline;
    }
    return style.errorUnderline;
  }, [variant]);

  return (
    <div
      className={`${style.root} ${typeStyle} ${sizeStyle} ${variantStyle} ${isError ? isErrorStyle : ""}`}
    >
      {Icon !== undefined && (
        <div className={style.iconWrap}>
          <Icon className={style.icon} />
        </div>
      )}
      <Input type={typeValue} size={size} onChange={onChange} />
      {type === "password" &&
        (isShowPassword ? (
          <a className={style.passwordWrap} onClick={handleShowPassword}>
            <BsEyeSlash className={style.passwordIcon} />
          </a>
        ) : (
          <a className={style.passwordWrap} onClick={handleShowPassword}>
            <BsEye className={style.passwordIcon} />
          </a>
        ))}
    </div>
  );
};

const Index = React.memo(InputElement);
export default Index;
