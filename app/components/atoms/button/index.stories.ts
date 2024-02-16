import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";
import { BsGoogle, Bs0Circle, Bs123 } from "react-icons/bs";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "最小のボタンコンポーネント",
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
    children: { description: "ボタン内部のテキスト" },
    icon: {
      description: "react-iconのアイコンをそのまま受け取り表示する",
      control: "select",
      options: [undefined, "Bs0Circle", "Bs123", "BsGoogle"],
      mapping: {
        Bs0Circle: Bs0Circle,
        Bs123: Bs123,
        BsGoogle: BsGoogle,
      },
      defaultValue: undefined,
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
      description: "ボタンのサイズ",
    },
    onClick: {
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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Button",
    icon: undefined,
    onClick: () => {
      alert("clicked");
    },
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    icon: undefined,
    onClick: () => {
      alert("clicked");
    },
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    icon: undefined,
    onClick: () => {
      alert("clicked");
    },
    size: "large",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button",
    icon: BsGoogle,
    onClick: () => {
      alert("clicked");
    },
    size: "medium",
  },
};
