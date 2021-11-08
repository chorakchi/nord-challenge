import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Buttons allow users to take actions, and make choices, with a single tap..<br/>
          Buttons communicate actions that users can take. They are typically placed throughout your UI.
          `,
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button_ = Template.bind({});
Button_.args = {
  children: "Lorem Ipsum",
};
