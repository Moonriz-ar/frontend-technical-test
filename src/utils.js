// helper to convert number (in ms) to a time object, with 4 properties representing the string for day, hour, minute and second
export const convertMsToReadable = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const time = {
    textDay: normalizeToTwoNumbers(Math.floor(ms / day).toString()),
    textHour: removeNegativeSign(
      normalizeToTwoNumbers(Math.floor((ms % day) / hour).toString())
    ),
    textMinute: removeNegativeSign(
      normalizeToTwoNumbers(Math.floor((ms % hour) / minute).toString())
    ),
    textSecond: removeNegativeSign(
      normalizeToTwoNumbers(Math.floor((ms % minute) / second).toString())
    ),
  };

  return time;
};

// helper to pad the string with '0' to show at least 2 digits
export const normalizeToTwoNumbers = (str) => {
  return str.padStart(2, "0");
};

// helper to remove negative signs, useful to remove after countdown reaches zero and starts calculating overdue time
export const removeNegativeSign = (str) => {
  return str.replace("-", "");
};
