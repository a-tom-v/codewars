function distinct(a) {
    return  a.filter((value, index) => a.indexOf(value) === index);
  };