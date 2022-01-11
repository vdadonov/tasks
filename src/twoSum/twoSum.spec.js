import twoSum from "./twoSum.js";

describe("twoSum", () => {
  it("two sum", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
    expect(twoSum([1, 2, 3, 4, 5, 6, 7], 7)).toEqual([2, 3]);
  });
});
