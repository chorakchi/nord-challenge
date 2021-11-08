import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginBlock } from "./LoginBlock";

export default {
  title: "organisms/LoginBlock",
  component: LoginBlock,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof LoginBlock>;

const Template: ComponentStory<typeof LoginBlock> = (args) => (
  <LoginBlock {...args} />
);

export const LoginBlock_ = Template.bind({});
LoginBlock_.args = {};
