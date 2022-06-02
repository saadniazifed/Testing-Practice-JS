const calculator = require("./calculator");

test("Calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator", () => {
  expect(calculator.subtraction(1, 2)).toBe(1);
});

test("Calculator", () => {
  expect(calculator.multiplication(1, 2)).toBe(2);
});

test("Calculator", () => {
  expect(calculator.division(2, 2)).toBe(1);
});
