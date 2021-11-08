import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "./TextField";

export default {
  title: "Atoms/TextField",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component:
          `Text fields let users enter and edit text.<br/>
                Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
                <br/>` +
          `The TextField  component is a complete form control including a label, input. It comes with two variants: outlined (default), and primary.<br/>` +
          `<br/> <br/> <h5> Form props:</h5>` +
          " Standard form attributes are supported e.g. ```required```, ```disabled```, ```type```, etc. as well as a ```helperText``` which is used to give context about a field's input, such as how the input will be used. <br/> <br/>"
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const TextField_ = Template.bind({});
TextField_.args = {};
