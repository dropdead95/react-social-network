export const required = (value) => {
  if (value) return undefined;

  return "Field is required";
};

export const maxLength = (maxLengthNum) => {
  return (value) => {
    if (value && value.length > maxLengthNum)
      return `Max length is ${maxLengthNum} symbols`;

    return undefined;
  };
};

export const minLength = (minLengthNum) => {
  return (value) => {
    if (value && value.length < minLengthNum)
      return `Min length is ${minLengthNum} symbol`;

    return undefined;
  };
};
