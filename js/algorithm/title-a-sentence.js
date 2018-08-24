
function titleCase(str) {

  let ans = "";
  let isNewWord = true;
  for (let i=0; i<str.length; ++i) {
    let ch = str.charAt(i);
    if (isNewWord) {
      ch = ch.toUpperCase();
      isNewWord = false;
    }
    else {
      ch = ch.toLowerCase();
    }

    ans += ch;

    if (ch == ' ') {
      isNewWord = true;
    }
  }

  return ans;
}

console.log(titleCase("I'm a little tea pot"));
