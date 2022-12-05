import React from "react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    handleClick: { control: "handleClick" },
  },
};

const Template = (args) => <Button {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  backgroundColor: "gray",
  label: "Button",
};

export const Pink = Template.bind({});
Pink.args = {
  backgroundColor: "pink",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
