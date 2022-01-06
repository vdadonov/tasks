import palindrome from './palindrome.js';

describe('palindrome function', () => {
  it('palindrome', () => {
    expect(palindrome('sos')).toEqual(true);
    expect(palindrome('Ротор')).toEqual(true);
    expect(palindrome('А суахили или хауса?')).toEqual(true);
    expect(palindrome('Гори, пирог!')).toEqual(true);
    expect(palindrome('Вася')).toEqual(false);
  });
});
