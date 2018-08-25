

// js中的prototype相当于C++中的静态成员变量
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// 可以使用一个objectz作为prototype，但是需要注意的是，需要手动修改constructor的值


// 使用isPrototypeOf对其进行检查


// 使用派生关系完成代码精简
// ? 其实我好奇的时以下代码是如何体现派生关系的
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


// 使用Object.create创建对象
let duck = Object.create(Animal.prototype);

// 使用一下语句完成派生关系的体现
Bird.prototype = Object.create(Animal.prototype);


// js中的cloure相当于C++中的私有变量访问方法


// immediately invoked function expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
}) ();

// IIFF return an module
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
