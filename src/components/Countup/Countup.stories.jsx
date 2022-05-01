import React from "react";

import Countup from "./";

export default {
  title: "Example/Countup",
  component: Countup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Countup {...args} />;

// modified time prop, instead of array, replaced with object with two properties: startTime and stopTime
// added isRunning prop, which is a boolean.

export const Paused = Template.bind({});
Paused.args = {
  time: { startTime: 1651068386964, stopTime: 1651068686964 },
  isRunning: false,
};

export const Playing = Template.bind({});
Playing.args = {
  time: { startTime: 1651418100000 }, // modify this timestamp to be a past date
  isRunning: true,
};

// this is Unix Epoch time * 1000, which means is measured in milliseconds
