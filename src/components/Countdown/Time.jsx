import React from "react";
import { StyledTime } from "./styles";

import { normalizeToTwoNumbers, removeNegativeSign } from "../../utils";

function Time({ time: { textDay, textHour, textMinute, textSecond } }) {
  return (
    <StyledTime>{`${normalizeToTwoNumbers(textDay)} : ${removeNegativeSign(
      normalizeToTwoNumbers(textHour)
    )} : ${removeNegativeSign(
      normalizeToTwoNumbers(textMinute)
    )} : ${removeNegativeSign(normalizeToTwoNumbers(textSecond))}`}</StyledTime>
  );
}

export default Time;
