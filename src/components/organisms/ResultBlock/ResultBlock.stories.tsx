import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ResultBlock } from "./ResultBlock";
import { mockData } from "./ResultBlock.mock";

export default {
  title: "organisms/ResultBlock",
  component: ResultBlock,
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
} as ComponentMeta<typeof ResultBlock>;

const Template: ComponentStory<typeof ResultBlock> = (args) => (
  <ResultBlock {...args} />
);

export const ResultBlock_ = Template.bind({});
ResultBlock_.args = {
  ...mockData,
};
