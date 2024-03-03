import { type StoryObj, type Meta } from "@storybook/react";
import LoginForm from "~/components/templates/LoginForm";

const meta = {
  title: "template/LoginForm",
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: "Loginページのフォームコンポーネント",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
