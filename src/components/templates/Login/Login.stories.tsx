import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Login } from "./Login";

export default {
  title: "templates/Login",
  component: Login,
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
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Login_ = Template.bind({});
Login_.args = {};
