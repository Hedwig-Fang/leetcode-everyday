/*
* 234.回文链表 
* 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
*  
* 示例 1：
* 输入：head = [1,2,2,1]
* 输出：true
* 示例 2：
* 输入：head = [1,2]
* 输出：false
*  
* 提示：
* 	链表中节点数目在范围[1, 105] 内
* 	0 <= Node.val <= 9
*  
* 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
* 
*/


// @QUESTION_START
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  isPalindrome,
  {
    data: [[ [1,2,2,1]],[ [1,2]]],
    structure: ["ListNode"]
  },
  {
    data: [true,false],
    structure: ["boolean"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/palindrome-linked-list/');
