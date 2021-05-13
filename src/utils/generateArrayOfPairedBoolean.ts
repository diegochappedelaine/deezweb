const generateArrayOfPairedBoolean = (number: number) => {
  let result: boolean[] = [];

  // Quick function that will return an array of *2 false item then 2* true item
  // eslint-disable-next-line array-callback-return
  [...Array(number)].map((_, index) => {
    const lastIndex = result[index - 1];
    const beforeLastIndex = result[index - 2];
    if (index === 0 || index === 1) return result.push(false);
    if ((lastIndex && beforeLastIndex) || (!lastIndex && beforeLastIndex)) {
      return result.push(false);
    }
    if ((!lastIndex && !beforeLastIndex) || (lastIndex && !beforeLastIndex)) {
      return result.push(true);
    }
  });
  return result;
};

export default generateArrayOfPairedBoolean;
