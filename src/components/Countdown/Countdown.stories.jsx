import React from "react";
import Countdown from "./";

export default {
  title: "Example/Countdown",
  component: Countdown,
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

const Template = (args) => <Countdown {...args} />;

// modified time prop, instead of array, replaced with object with two properties: countdownTime and stopTime
// added isRunning prop, which is a boolean.
// added isDark prop, which is a boolean.
// added variant prop, to choose between three timer image variants: 'nice', 'hi' and 'shy'

export const Paused = Template.bind({});
Paused.args = {
  time: { stopTime: 1651068386964, countDownTime: 1651068686964 },
  isRunning: false,
  isDark: false,
  variant: "nice",
};

export const Playing = Template.bind({});
Playing.args = {
  time: { countDownTime: 1651597200000 }, // modify this timestamp to be a future date
  isRunning: true,
  isDark: true,
  variant: "hi",
};
