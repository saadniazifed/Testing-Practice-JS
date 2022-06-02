const reverseString = require("./reverse");

test("reverse", () => {
  expect(reverseString("hello")).toBe("olleh");
});
