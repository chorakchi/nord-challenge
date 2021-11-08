import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Table.mock";

import { Table } from "./Table";

export default {
  title: "Atoms/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          `Table component display information in a table view format of rows and columns..<br/>` +
          `<br/> <br/> <h5> Form props:</h5>` +
          " this component had props for heading and items. and it accepting array for them."
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

export const Table_ = Template.bind({});
Table_.args = {
  ...mockData
};
