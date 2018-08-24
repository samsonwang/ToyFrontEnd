function getIndexToIns(arr, num) {

  // Find my place in this sorted array.
  arr.sort((a, b) => {return a-b});
  console.log(arr);

  let i=0;
  for (; i<arr.length; ++i) {
    if (arr[i] >= num) {
      break;
    }
  }

  if (i<0) {
    i = 0;
  }

  return i;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
