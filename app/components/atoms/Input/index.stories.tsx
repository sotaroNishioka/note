import type { Meta, StoryObj } from "@storybook/react";

import Input from "~/components/atoms/Input";

const meta = {
  title: "Atoms/Input",
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

export const Text: Story = {
  args: {
    type: "text",
    size: "small",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};

export const Password: Story = {
  args: {
    type: "password",
    size: "medium",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};

export const Email: Story = {
  args: {
    type: "email",
    size: "large",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};
