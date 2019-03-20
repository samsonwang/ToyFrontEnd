
//'use strict'

function myFunction() {
  'use strict' // 仅在function作用域启动strict模式
  let a = 4;
  return a * a;
}

// 在use strict模式中，会报错；反之，能够正常运行。
a = 6;
console.log('a = ' + a);


// function closure demo code
// self-invoking function

let func = (function () {
  let counter = 0;
  let add = function () {
    ++counter;
    console.log('closure: counter increased');
    return counter;
  }
  return add;
})();

let current = func();
console.log('current: ' + current);

current = func();
console.log('current: ' + current);

current = func();
console.log('current: ' + current);
