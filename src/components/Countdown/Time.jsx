import React from "react";
import { StyledTime } from "./styles";

function Time({ time: { textDay, textHour, textMinute, textSecond } }) {
  return (
    <StyledTime>{`${textDay} : ${textHour} : ${textMinute} : ${textSecond}`}</StyledTime>
  );
}

export default Time;
