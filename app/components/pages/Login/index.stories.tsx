import { type StoryObj, type Meta } from "@storybook/react";
import Login from "~/components/pages/Login";

const meta = {
  title: "pages/Login",
  component: Login,
  parameters: {
    docs: {
      description: {
        component: "Loginページのpageコンポーネント",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Iphone: Story = {
  parameters: {
    viewport: { defaultViewport: "iphonex" },
  },
};
