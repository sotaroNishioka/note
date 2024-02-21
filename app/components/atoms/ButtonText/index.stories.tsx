import type { Meta, StoryObj } from "@storybook/react";

import ButtonText from "./index";

const meta = {
  title: "Atoms/ButtonText",
  component: ButtonText,
  parameters: {
    docs: {
      description: {
        component: "Buttonのテキスト",
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
      options: ["small", "medium", "large"],
      defaultValue: "medium",
      description: "ボタンのサイズ",
    },
    type: {
      control: "radio",
      options: ["submit", "danger", "info"],
      defaultValue: "submit",
      description: "ボタンのタイプ",
    },
    children: {
      description: "ボタン内部のテキスト",
      defaultValue: "Button",
      control: "text",
    },
  },
} satisfies Meta<typeof ButtonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Button",
    type: "submit",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    type: "danger",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    type: "info",
    size: "large",
  },
};