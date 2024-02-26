import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "スタイルを指定したinputコンポーネント",
      },
    },
    backgrounds: {
      values: [
        { name: "red", value: "#f00" }, // canvasの背景色を赤に設定
        { name: "green", value: "#0f0" }, // canvasの背景色を緑に設定
        { name: "blue", value: "#00f" }, // canvasの背景色を青に設定
      ],
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large", undefined],
      defaultValue: "medium",
      description: "入力された文字のサイズ",
    },
    variant: {
      control: "radio",
      options: ["outline", "underline"],
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
