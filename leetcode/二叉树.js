// 前序遍历 根左右
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
var preorderTraversal = function(root) {
  const res = [];
  const preorder = (root) => {
      if(!root) {
          return
      }
      res.push(root.val)
      preorder(root.left);
      preorder(root.right);
  }
  preorder(root);
  return res

};

// 中序遍历 左根右
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

  const res = [];
  const inorder = (root) => {
      if(!root) {
          return;
      }
      inorder(root.left)
      res.push(root.val)
      inorder(root.right)
  }
  inorder(root)
  return res;
};