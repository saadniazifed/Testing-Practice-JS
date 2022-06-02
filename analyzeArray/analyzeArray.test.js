const analyzeArray = require("./analyzeArray");

test("average", () => {
  expect(analyzeArray([2, 2, 2, 2]).average).toBe(2);
});

test("minimum", () => {
  expect(analyzeArray([1, 2, 2, 2]).min).toBe(1);
});

test("maximum", () => {
  expect(analyzeArray([2, 2, 2, 3]).max).toBe(3);
});

test("length", () => {
  expect(analyzeArray([1]).length).toBe(1);
});
