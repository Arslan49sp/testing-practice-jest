const Calculator = require("./calculator.js");

const calculator = new Calculator();

describe("calculator have ", () => {
  const a = 4;
  const b = 2;

  test("add function should return the sum", () => {
    expect(calculator.add(a, b)).toBe(6);
  });
  test("substract function should return the differeance", () => {
    expect(calculator.substract(a, b)).toBe(2);
  });
  test("divide fuction should divide a by b", () => {
    expect(calculator.divide(a, b)).toBe(2);
  });
  test("multiple fuction should return the product of a and b.", () => {
    expect(calculator.multiply(a, b)).toBe(8);
  });
});
