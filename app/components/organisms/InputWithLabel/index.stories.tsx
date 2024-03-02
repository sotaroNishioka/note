import { type StoryObj, type Meta } from "@storybook/react";
import InputWithLabel from "~/components/organisms/InputWithLabel";
import {
  IoLockClosedOutline,
  IoMailOutline,
  IoLogoGoogle,
} from "react-icons/io5";

const meta = {
  title: "Organisms/InputWithLabel",
  component: InputWithLabel,
  parameters: {
    docs: {
      description: {
        component: "ラベル付きのinputコンポーネント",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "inputのラベル",
      defaultValue: "ラベル",
      control: "text",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large", undefined],
      defaultValue: "medium",
      description: "入力された文字のサイズ",
    },
    type: {
      control: "radio",
      options: ["text", "password", "email", undefined],
      defaultValue: "text",
      description: "inputのtype",
    },
    icon: {
      control: "radio",
      options: [
        "IoLockClosedOutline",
        "IoMailOutline",
        "IoLogoGoogle",
        undefined,
      ],
      mapping: {
        IoLockClosedOutline,
        IoMailOutline,
        IoLogoGoogle,
        undefined,
      },
      defaultValue: "BsGoogle",
      description: "ボタン内に表示するアイコン",
    },
    variant: {
      control: "radio",
      options: ["outline", "underline", undefined],
      defaultValue: "outline",
      description: "inputのバリエーション",
    },
    isError: {
      control: "boolean",
      defaultValue: false,
      description: "入力値に問題がある場合のスタイル",
    },
    onChange: {
      description: "input変更時のイベント",
      control: "select",
      options: [
        undefined,
        (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        },
      ],
      defaultValue: undefined,
    },
  },
} satisfies Meta<typeof InputWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベル",
  },
};
