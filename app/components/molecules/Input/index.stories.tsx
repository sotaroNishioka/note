import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";
import { Bs0Circle, Bs123, BsGoogle } from "react-icons/bs";

const meta = {
  title: "Molecules/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "スタイルを指定したinputコンポーネント",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["text", "password", "email", undefined],
      defaultValue: "text",
      description: "inputのtype",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large", undefined],
      defaultValue: "medium",
      description: "入力された文字のサイズ",
    },
    icon: {
      control: "radio",
      options: ["BsGoogle", "Bs0Circle", "Bs123", undefined],
      mapping: {
        Bs0Circle,
        Bs123,
        BsGoogle,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: BsGoogle,
  },
};

export const Password: Story = {
  args: {
    icon: Bs0Circle,
    size: "small",
    type: "password",
  },
};

export const Email: Story = {
  args: {
    icon: Bs123,
    size: "medium",
    type: "email",
  },
};

export const Text: Story = {
  args: {
    icon: BsGoogle,
    size: "large",
    type: "text",
  },
};
