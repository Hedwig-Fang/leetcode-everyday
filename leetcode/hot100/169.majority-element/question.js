/*
* 169.多数元素 
* 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
* 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
*  
* 示例 1：
* 输入：nums = [3,2,3]
* 输出：3
* 示例 2：
* 输入：nums = [2,2,1,1,1,2,2]
* 输出：2
*  
* 提示：
* 	n == nums.length
* 	1 <= n <= 5 * 104
* 	-109 <= nums[i] <= 109
*  
* 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  majorityElement,
  {
    data: [[ [3,2,3]],[ [2,2,1,1,1,2,2]]],
    structure: ["number[]"]
  },
  {
    data: [3,2],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/majority-element/');
