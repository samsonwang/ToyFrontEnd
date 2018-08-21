

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};


function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    // let maxOfTomorrow = 10; // 这里不能这样写
    const { tomorrow: {max: maxOfTomorrow}} = LOCAL_FORECAST;
    // 注意这里const不可以省略
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
