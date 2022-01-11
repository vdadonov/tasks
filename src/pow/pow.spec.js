import pow from "./pow.js";

describe("pow", () => {
  it('pow, more zero', () => {
    expect(pow(2, 2)).toEqual(4);
    expect(pow(2, 3)).toEqual(8);
    expect(pow(2, 4)).toEqual(16);
    expect(pow(2, 10)).toEqual(1024);
  });
});
