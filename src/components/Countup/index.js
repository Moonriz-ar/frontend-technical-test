import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Time from "./Time";

import { convertMsToReadable } from "../../utils";

const Countup = ({
  time: { startTime, stopTime },
  isRunning,
  isDark,
  variant,
}) => {
  const [displayTime, setDisplayTime] = useState(undefined);

  useEffect(() => {
    if (!isRunning) {
      // calculate elapsed time between startTime and stopTime
      const delta = stopTime - startTime;
      const timeObject = convertMsToReadable(delta);
      setDisplayTime(timeObject);
    } else {
      setInterval(() => {
        // get current datetime
        const now = Date.now();
        // calculate elapsed time between startTime and now
        const delta = now - startTime;
        const timeObject = convertMsToReadable(delta);
        setDisplayTime(timeObject);
      }, 1000);
    }
  }, [isRunning, startTime, stopTime]);

  return (
    <>
      {displayTime && (
        <Time time={displayTime} isDark={isDark} variant={variant} />
      )}
    </>
  );
};

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = {
  time: [],
};

export default Countup;
