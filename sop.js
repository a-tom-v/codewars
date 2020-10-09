function positiveSum(arr) {
    const sumArr = arr.reduce((x, y) => y >= 0 ? x + y: x, 0);
    return sumArr;
  };