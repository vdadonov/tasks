import sum from './sum.js';

describe('sum function', () => {
  it('sums up two integers, >= 0', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(10, 2)).toEqual(12);
    expect(sum(10, 2000)).toEqual(2010);
    expect(sum(0, 2000)).toEqual(2000);
    expect(sum(0, 0)).toEqual(0);
    expect(sum(11, 2345)).toEqual(2356);
    expect(sum(99, 2399)).toEqual(2498);
  });
});
