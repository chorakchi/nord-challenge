import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./Form";

export default {
  title: "Atoms/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          `This component doesn't have visual style and it's a wrapper on form element.<br/>` +
          `<br/> <br/> <h5> Form props:</h5>` +
          " Standard form attributes are supported"
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args} />
);

export const Form_ = Template.bind({});
Form_.args = {};
