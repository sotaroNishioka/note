import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

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
  args: {},
};
