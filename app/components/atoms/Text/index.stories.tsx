import type { Meta, StoryObj } from "@storybook/react";

import Text from "./index";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "Textコンポーネント",
      },
    },
    // backgrounds: {
    //   values: [
    //     { name: "red", value: "#f00" }, // canvasの背景色を赤に設定
    //     { name: "green", value: "#0f0" }, // canvasの背景色を緑に設定
    //     { name: "blue", value: "#00f" }, // canvasの背景色を青に設定
    //   ],
    // },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "表示するテキストの値",
      defaultValue: "テキストコンポーネント・TextComponent",
      control: "text",
    },
    size: {
      control: "radio",
      options: ["subtext", "text", "strong", "h5", "h4", "h3", "h2", "h1"],
      defaultValue: "text",
      description: "テキストのサイズ",
    },
    type: {
      control: "radio",
      options: ["black", "danger", "warn", "info"],
      defaultValue: "black",
      description: "テキストの色",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "テキストコンポーネント・TextComponent",
  },
};

export const Subtext: Story = {
  args: {
    children: "サブテキスト",
    size: "subtext",
  },
};

export const TextStory: Story = {
  args: {
    children: "テキスト",
    size: "text",
  },
};

export const Strong: Story = {
  args: {
    children: "強調テキスト",
    size: "strong",
  },
};

export const H5: Story = {
  args: {
    children: "H5",
    size: "h5",
  },
};

export const H4: Story = {
  args: {
    children: "H4",
    size: "h4",
  },
};

export const H3: Story = {
  args: {
    children: "H3",
    size: "h3",
  },
};

export const H2: Story = {
  args: {
    children: "H2",
    size: "h2",
  },
};

export const H1: Story = {
  args: {
    children: "H1",
    size: "h1",
  },
};

export const Black: Story = {
  args: {
    children: "Black",
    type: "black",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    type: "danger",
  },
};

export const Warn: Story = {
  args: {
    children: "Warn",
    type: "warn",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    type: "info",
  },
};
