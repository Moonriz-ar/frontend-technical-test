import React from "react";
import { StyledTime, StyledImage, StyledWrapper } from "./styles";
import { timerImagePaths } from "../../utils";

function Time({
  time: { textDay, textHour, textMinute, textSecond },
  isDark,
  variant,
}) {
  const handleTimerImagePath = (variant) => {
    switch (variant) {
      case "hi":
        return timerImagePaths.hi;
      case "shy":
        return timerImagePaths.shy;
      case "nice":
        return timerImagePaths.nice;
      default:
        return timerImagePaths.hi;
    }
  };
  return (
    <>
      <StyledWrapper>
        <StyledImage src={handleTimerImagePath(variant)} alt="Timer image" />
        <StyledTime
          isDark={isDark}
        >{`${textDay} : ${textHour} : ${textMinute} : ${textSecond}`}</StyledTime>
      </StyledWrapper>
    </>
  );
}

export default Time;
