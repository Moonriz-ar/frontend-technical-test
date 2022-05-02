import React from "react";

import Countup from "./";

export default {
  title: "Example/Countup",
  component: Countup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{}}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
            rel="stylesheet"
          />
        </head>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Countup {...args} />;

// modified time prop, instead of array, replaced with object with two properties: startTime and stopTime
// added isRunning prop, which is a boolean.
// added isDark prop, which is a boolean.
// added variant prop, to choose between three timer image variants: 'nice', 'hi' and 'shy'

export const Paused = Template.bind({});
Paused.args = {
  time: { startTime: 1651068386964, stopTime: 1651068686964 },
  isRunning: false,
  isDark: true,
  variant: "shy",
};

export const Playing = Template.bind({});
Playing.args = {
  time: { startTime: 1651418100000 }, // modify this timestamp to be a past date
  isRunning: true,
  isDark: false,
  variant: "hi",
};
