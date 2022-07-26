Array.prototype.myMap = function (cb) {
  const arr = [...this];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
  }
  return arr;
}

Array.prototype.myFilter = function (cb) {
  const arr = [...this];
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

Array.prototype.myReduce = function (cb, initialValue = this[0]) {
  const arr = [...this];
  let previousValue = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) previousValue = initialValue;
    previousValue = cb(previousValue, arr[i], i, arr);
  }

  return previousValue;
}
