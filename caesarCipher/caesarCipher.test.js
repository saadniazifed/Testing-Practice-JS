const caesarCipher = require("./caesarCipher");

test("caesarCipher", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});
