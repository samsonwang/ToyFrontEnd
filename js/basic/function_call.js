
// https://www.w3schools.com/js/js_function_call.asp

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

var person1 = {
  firstName:"John",
  lastName: "Doe"
}

var ret = person.fullName.call(person1, "Oslo", "Norway");

console.log(ret);
