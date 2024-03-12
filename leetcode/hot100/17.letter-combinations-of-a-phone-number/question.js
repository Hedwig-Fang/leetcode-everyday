/*
* 17.电话号码的字母组合 
* 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
* 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*  
* 示例 1：
* 输入：digits = "23"
* 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
* 示例 2：
* 输入：digits = ""
* 输出：[]
* 示例 3：
* 输入：digits = "2"
* 输出：["a","b","c"]
*  
* 提示：
* 	0 <= digits.length <= 4
* 	digits[i] 是范围 ['2', '9'] 的一个数字。
* 
*/


// @QUESTION_START
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  terCombinations,
  {
    data: [[ "23"],[ ""],[ "2"]],
    structure: ["string"]
  },
  {
    data: [["ad","ae","af","bd","be","bf","cd","ce","cf"],[],["a","b","c"]],
    structure: ["string[]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/letter-combinations-of-a-phone-number/');
