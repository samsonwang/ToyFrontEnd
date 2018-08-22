
let a = 8, b = 6;

(() => {
    "use strict";
    // change code below this line
    [a, b] = [b, a];
    // 注意这里省略了const
    // change code above this line
})();

console.log(a); // should be 6
console.log(b); // should be 8

