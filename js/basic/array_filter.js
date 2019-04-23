

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = names.filter((v, i) => names.indexOf(v) == i);


console.log(names);
console.log(unique);
