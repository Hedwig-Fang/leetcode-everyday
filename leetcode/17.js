// 17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
      return [];
  }
  
  const phoneMap = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
  };

  function backtrack(index, currentCombination) {
      if (index === digits.length) {
          combinations.push(currentCombination);
      } else {
          let digit = digits[index];
          for (let letter of phoneMap[digit]) {
              backtrack(index + 1, currentCombination + letter);
          }
      }
  }

  let combinations = [];
  backtrack(0, '');
  return combinations;
};

// Example usage:
// let result = letterCombinations("23");
// console.log(result);