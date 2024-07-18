import {
  sum,
  addCount,
  getFalsy,
  getNull,
  getUndefined,
  getTruthy,
  getDefined,
  greaterThan,
  greaterThanOrEqual,
  lessThanOrEqual,
  lessThan,
  helloWorld,
  addHobie,
} from "../utils.js";

describe("utils testing", () => {
  it("should sum works correct", () => {
    const result = sum(1, 2)
    expect(result).toBe(3);
    expect(sum(1, 2)).not.toBe(1);
  });

  it("should addCount works correct", () => {
    const obj = { name: "Serhii" };
    expect(addCount(obj, [1, 2])).toEqual({ ...obj, count: 3 });
    expect(addCount(obj, [1, 2])).not.toEqual({ ...obj, count: 4 });
  });

  test("getNull should return null", () => {
    expect(getNull()).toBeNull();
  });

  test("getUndefined should return undefined", () => {
    expect(getUndefined()).toBeUndefined();
  });

  test("getDefined should return a defined value", () => {
    expect(getDefined()).toBeDefined();
  });

  test("getTruthy should return a truthy value", () => {
    expect(getTruthy()).toBeTruthy();
  });

  test("getFalsy should return a falsy value", () => {
    expect(getFalsy()).toBeFalsy();
  });

  test("greaterThan value must to be greater then 1", () => {
    expect(greaterThan()).toBeGreaterThan(0);
  });

  test("greaterThanOrEqual value must to be greater or equal then 1", () => {
    expect(greaterThanOrEqual()).toBeGreaterThanOrEqual(1);
  });

  test("greaterLessThanOrEqual value must to be less or equal then 3", () => {
    expect(lessThanOrEqual()).toBeLessThanOrEqual(5);
  });

  test("greaterLessThan value must to be less or equal then 3", () => {
    expect(lessThan()).toBeLessThan(4);
  });

  test("helloWorld should return correct message", () => {
    expect(helloWorld()).toMatch("Hello world!");
    expect(helloWorld()).not.toMatch("You know nothing, Jon Snow!");
  });

  test("addHobie should add new hobie", () => {
    const hobbies = ["shooting"];
    expect(addHobie(hobbies, "dancing")).toContain("dancing");
  });
});
