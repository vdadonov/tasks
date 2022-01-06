function palindrome(str) {
  let oldStr = str.match(/[\wа-я]+/ig);
  oldStr = oldStr.map(e => e.toLowerCase());
  oldStr = oldStr.join("");

  return oldStr === oldStr.split('').reverse().join("");
}

export default palindrome;
