const capitalizeString = require("./capitalize.js");

test("capitalizeString will return a string with the first captial charachter", () => {
  expect(capitalizeString("hello there")).toBe("Hello there");
});
