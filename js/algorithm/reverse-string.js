
function reverseString(str) {
  let arr = str.split("");
  console.log(arr);
  let ans = "";
  for (let i=arr.length-1; i>=0; --i) {
    ans += arr[i];
  }

  return ans;
}

console.log(reverseString("hello"));
