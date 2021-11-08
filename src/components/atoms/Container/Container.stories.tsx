import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Atoms/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: `While containers can be nested, most layouts do not require a nested container.`,
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Container_ = Template.bind({});
Container_.args = {
  children: "Lorem Ipsum",
};
