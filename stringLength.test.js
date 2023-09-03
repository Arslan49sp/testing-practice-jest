const stringLength = require("./stringLength.js");

test("stringLength should return number of the length", () => {
  const strLen = stringLength("Arslan");
  expect(strLen).toBe(10);
});
test("stringLength insure theat the maximum length of the string is TEN", () => {
  const strLen = stringLength("Arslan Majeed");
  expect(strLen).toBeUndefined();
});
test("stringLengh insure that the minimum length of the string is ONE", () => {
  const strLen = stringLength("");
  expect(strLen).toBeUndefined();
});
