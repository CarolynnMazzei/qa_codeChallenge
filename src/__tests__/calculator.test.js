"use strict";
exports.__esModule = true;
var calculator_1 = require("../calculator");
var dataset = [
    { x: 5, y: 10, method: "add" },
    { x: 5, y: 10, method: "subtract" },
    { x: 5, y: 10, method: "multiply" },
    { x: 5, y: 10, method: "divide" },
    { x: -12, y: 10000, method: "add" },
    { x: -12, y: 10000, method: "subtract" },
    { x: -12, y: 10000, method: "multiply" },
    { x: -12, y: 10000, method: "divide" },
    { x: 42, y: 0, method: "add" },
    { x: 42, y: 0, method: "subtract" },
    { x: 42, y: 0, method: "multiply" },
    { x: 42, y: 0, method: "divide" },
    { x: 81, y: 227, method: "add" },
    { x: 81, y: 227, method: "subtract" },
    { x: 81, y: 227, method: "multiply" },
    { x: 81, y: 227, method: "divide" },
];
describe("Calculator", function () {
    dataset.forEach(function (calc) {
        test("the " + calc.method + " method with " + calc.x + " and " + calc.y, function () {
            switch (calc.method) {
                case "add":
                    expect(calculator_1["default"].add(calc.x, calc.y)).toEqual(calc.x + calc.y);
                    break;
                case "subtract":
                    expect(calculator_1["default"].subtract(calc.x, calc.y)).toEqual(calc.x - calc.y);
                    break;
                case "multiply":
                    expect(calculator_1["default"].multiply(calc.x, calc.y)).toEqual(calc.x * calc.y);
                    break;
                case "divide":
                    expect(calculator_1["default"].divide(calc.x, calc.y)).toEqual(calc.x / calc.y);
                    break;
                default:
                    console.log("there is no matching calculation type");
            }
        });
    });
});
