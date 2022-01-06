function sum(a, b) {
  let firstValue = `${a}`.split("");
  let secondValue = `${b}`.split("");

  if (firstValue.length > secondValue.length) {
    for (let i = secondValue.length; i < firstValue.length; i++) {
      secondValue.unshift("0");
    }
  } else if (secondValue.length > firstValue.length) {
    for (let i = firstValue.length; i < secondValue.length; i++) {
      firstValue.unshift("0");
    }
  }

  let accumulator = 0;
  let sum = [];
  for (let index = firstValue.length - 1; index >= 0; index--) {
    let currentSum = Number(firstValue[index], 10) + Number(secondValue[index], 10) + accumulator;
    if (currentSum > 9) {
      accumulator = parseInt(currentSum / 10);
      currentSum = currentSum % 10;
    } else {
      accumulator = 0;
    }

    sum.unshift(currentSum);
  }

  sum = parseInt(sum.join(""));
  return sum;
}

export default sum;
