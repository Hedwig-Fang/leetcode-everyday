/*
* 32.最长有效括号 
* 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
*  
* 示例 1：
* 输入：s = "(()"
* 输出：2
* 解释：最长有效括号子串是 "()"
* 示例 2：
* 输入：s = ")()())"
* 输出：4
* 解释：最长有效括号子串是 "()()"
* 示例 3：
* 输入：s = ""
* 输出：0
*  
* 提示：
* 	0 <= s.length <= 3 * 104
* 	s[i] 为 '(' 或 ')'
* 
*/


// @QUESTION_START
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  longestValidParentheses,
  {
    data: [[ "(()"],[ ")()())"],[ ""]],
    structure: ["string"]
  },
  {
    data: [2,4,0],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/longest-valid-parentheses/');
