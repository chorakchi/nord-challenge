import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Result } from "./Result";
import { mockData } from "./Result.mock";

export default {
  title: "templates/Result",
  component: Result,
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
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Result_ = Template.bind({});
Result_.args = { ...mockData };
