function twoSum(nums, target) {
  let storage = {};

  for (let [key, item] of nums.entries()) {
    if (typeof storage[item] !== "undefined") {
      return [storage[item], key];
    } else {
      storage[target - item] = key;
    }
  }
}

export default twoSum;
