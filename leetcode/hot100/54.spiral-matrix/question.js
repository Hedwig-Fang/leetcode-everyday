/*
* 54.螺旋矩阵 
* 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
*  
* 示例 1：
* 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
* 输出：[1,2,3,6,9,8,7,4,5]
* 示例 2：
* 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
* 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
*  
* 提示：
* 	m == matrix.length
* 	n == matrix[i].length
* 	1 
* 	-100 
* 
*/


// @QUESTION_START
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  spiralOrder,
  {
    data: [[ [[1,2,3],[4,5,6],[7,8,9]]],[ [[1,2,3,4],[5,6,7,8],[9,10,11,12]]]],
    structure: ["number[][]"]
  },
  {
    data: [[1,2,3,6,9,8,7,4,5],[1,2,3,4,8,12,11,10,9,5,6,7]],
    structure: ["number[]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/spiral-matrix/');
