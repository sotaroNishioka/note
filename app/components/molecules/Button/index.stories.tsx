import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta = {
  title: "Molecules/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Buttonコンポーネント（アイコンな付随要素なし）",
      },
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
    variant: {
      control: "radio",
      options: ["text", "outline", "contained"],
      defaultValue: "outline",
      description: "ボタンのバリエーション",
    },
    onClick: {
      action: "clicked",
      description: "ボタンクリック時のイベント",
      options: [
        undefined,
        () => {
          alert("clicked");
        },
      ],
      defaultValue: undefined,
    },
    children: {
      description: "ボタン内部のテキスト",
      defaultValue: "Button",
      control: "text",
    },
  },
} satisfies Meta<typeof Button>;

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
