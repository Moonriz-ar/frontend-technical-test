import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Time from "./Time";

import { convertMsToReadable } from "../../utils";

const Countdown = ({ time: { countDownTime, stopTime }, isRunning }) => {
  const [displayTime, setDisplayTime] = useState(undefined);

  useEffect(() => {
    if (!isRunning) {
      // calculate elapsed time between countdown time and stop time
      const delta = countDownTime - stopTime;
      const timeObject = convertMsToReadable(delta);
      setDisplayTime(timeObject);
    } else {
      setInterval(() => {
        // get current datetime
        const now = Date.now();

        // calculate time between countdown until now
        const delta = countDownTime - now;
        const timeObject = convertMsToReadable(delta);
        setDisplayTime(timeObject);
      }, 1000);
    }
  }, [isRunning, countDownTime, stopTime]);

  return <>{displayTime && <Time time={displayTime} />}</>;
};

Countdown.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countdown.defaultProps = {
  time: [],
};

export default Countdown;
