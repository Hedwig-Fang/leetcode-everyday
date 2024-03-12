/*
* 416.分割等和子集 
* 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*  
* 示例 1：
* 输入：nums = [1,5,11,5]
* 输出：true
* 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
* 示例 2：
* 输入：nums = [1,2,3,5]
* 输出：false
* 解释：数组不能分割成两个元素和相等的子集。
*  
* 提示：
* 	1 
* 	1 
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  canPartition,
  {
    data: [[ [1,5,11,5]],[ [1,2,3,5]]],
    structure: ["number[]"]
  },
  {
    data: [true,false],
    structure: ["boolean"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/partition-equal-subset-sum/');
