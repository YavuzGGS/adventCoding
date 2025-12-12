import { Main, countClicks, countEncounteredZero } from "./DayOne";

describe("advent day 1", () => {
  const testData = [
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
  ];
  test("Testing Numbers", () => {
    const text = Main(testData);
    expect(text).toBe(6);
  });
  test("Testing Numbers", () => {
    const text = countClicks(testData);
    expect(text).toBe(6);
  });
});

describe("#countEncounteredZeros", () => {
  test("should return 1 when input R64", () => {
    expect(countEncounteredZero(50, 64, "R")).toBe(1);
  });
  test("should return 8 when input R792", () => {
    expect(countEncounteredZero(50, 792, "R")).toBe(8);
  });
  test("should return 1 when input L64", () => {
    expect(countEncounteredZero(50, 64, "L")).toBe(1);
  });
  test("should return 1 when input L435", () => {
    expect(countEncounteredZero(50, 435, "L")).toBe(4);
  });
  test("should return 0 because this would never reach a zero", () => {
    expect(countEncounteredZero(50, 44, "L")).toBe(0);
  });
  test("should return 0 because this would never reach a zero", () => {
    expect(countEncounteredZero(50, 49, "R")).toBe(0);
  });
});
