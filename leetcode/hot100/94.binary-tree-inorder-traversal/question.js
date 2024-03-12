/*
* 94.二叉树的中序遍历 
* 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
*  
* 示例 1：
* 输入：root = [1,null,2,3]
* 输出：[1,3,2]
* 示例 2：
* 输入：root = []
* 输出：[]
* 示例 3：
* 输入：root = [1]
* 输出：[1]
*  
* 提示：
* 	树中节点数目在范围 [0, 100] 内
* 	-100 <= Node.val <= 100
*  
* 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
* 
*/


// @QUESTION_START
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  inorderTraversal,
  {
    data: [[ [1,null,2,3]],[ []],[ [1]]],
    structure: ["TreeNode"]
  },
  {
    data: [[1,3,2],[],[1]],
    structure: ["number[]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/binary-tree-inorder-traversal/');
