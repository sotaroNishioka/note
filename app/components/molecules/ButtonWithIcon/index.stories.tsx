import type { Meta, StoryObj } from "@storybook/react";

import ButtonWithIcon from "./index";
import { Bs0Circle, Bs123, BsGoogle } from "react-icons/bs";

const meta = {
  title: "Molecules/ButtonWithIcon",
  component: ButtonWithIcon,
  parameters: {
    docs: {
      description: {
        component: "アイコン付きButtonコンポーネント",
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
      description: "ボタンのサイズ",
    },
    type: {
      control: "radio",
      options: ["submit", "danger", "info", undefined],
      defaultValue: "info",
      description: "ボタンのタイプ",
    },
    variant: {
      control: "radio",
      options: ["outline", "text", "contained", undefined],
      defaultValue: "text",
      description: "ボタンのバリエーション",
    },
    icon: {
      control: "radio",
      options: ["BsGoogle", "Bs0Circle", "Bs123"],
      mapping: {
        Bs0Circle,
        Bs123,
        BsGoogle,
      },
      defaultValue: "BsGoogle",
      description: "ボタン内に表示するアイコン",
    },
    onClick: {
      action: "clicked",
      description: "ボタンクリック時のイベント",
      control: "select",
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
} satisfies Meta<typeof ButtonWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Button",
    type: "submit",
    size: "small",
    icon: Bs0Circle,
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    type: "danger",
    size: "medium",
    icon: Bs123,
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    type: "info",
    size: "large",
    icon: BsGoogle,
  },
};
