const reverseString = require("./reverseString.js");

test("reverseString should return a string with reverse order", () => {
  const result = reverseString("Arslan");
  expect(result).toBe("nalsrA");
});
