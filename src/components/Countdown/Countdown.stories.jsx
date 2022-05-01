import React from "react";

import Countdown from "./";

export default {
  title: "Example/Countdown",
  component: Countdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Countdown {...args} />;

// modified time prop, instead of array, replaced with object with two properties: countdownTime and stopTime
// added isRunning prop, which is a boolean.

export const Paused = Template.bind({});
Paused.args = {
  time: { stopTime: 1651068386964, countDownTime: 1651068686964 },
  isRunning: false,
};

export const Playing = Template.bind({});
Playing.args = {
  time: { countDownTime: 1651597200000 }, // modify this timestamp to be a future date
  isRunning: true,
};
