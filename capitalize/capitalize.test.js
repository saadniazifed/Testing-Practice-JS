const capitalizeString = require("./capitalize");

test("capitalize", () => {
  expect(capitalizeString("capital")).toBe("Capital");
});
