import React from "react";
import { StyledTime } from "../styles";

import { normalizeToTwoNumbers } from "../helper";

function Time({ time: { textDay, textHour, textMinute, textSecond } }) {
  return (
    <StyledTime>{`${normalizeToTwoNumbers(textDay)} : ${normalizeToTwoNumbers(
      textHour
    )} : ${normalizeToTwoNumbers(textMinute)} : ${normalizeToTwoNumbers(
      textSecond
    )}`}</StyledTime>
  );
}

export default Time;
