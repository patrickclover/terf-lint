export const TextOccurrences = (string: string, subString: string) => {
  console.log(string, subString);
  const regExp = new RegExp(subString, "gi");
  const response = string.match(regExp);
  if (response !== null) {
    return response.length;
  }
  return 0;
};
