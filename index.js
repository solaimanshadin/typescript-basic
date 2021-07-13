"use strict";
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown
var myName = "Solaiman Shadin";
var age;
age = 12;
var isHungry = false;
var gameDirection = "right";
var studentId = 344304;
studentId = 'web4-344304';
studentId = 122323;
var person = {
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping"
};
var person2 = {
    name: "Someone",
    age: 80,
};
//  Array 
var numbers = [33, 40, 50, 80, 'stefjhj'];
var persons = [
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    }
];
// functions
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("Shadin");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, my name is  " + name + ", And I'm " + age + "!");
};
introduce({
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping"
});
var getArray = function (arr) {
    return arr;
};
getArray(['1edrew', 'hjdfhjddfjh dfndj']);
getArray([1, 2, 43, 4]);
// enum
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thr"] = "THR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Sat);
