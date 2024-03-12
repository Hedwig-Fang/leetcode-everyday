/*
* 19.删除链表的倒数第 N 个结点 
* 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*  
* 示例 1：
* 输入：head = [1,2,3,4,5], n = 2
* 输出：[1,2,3,5]
* 示例 2：
* 输入：head = [1], n = 1
* 输出：[]
* 示例 3：
* 输入：head = [1,2], n = 1
* 输出：[1]
*  
* 提示：
* 	链表中结点的数目为 sz
* 	1 <= sz <= 30
* 	0 <= Node.val <= 100
* 	1 <= n <= sz
*  
* 进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  removeNthFromEnd,
  {
    data: [[ [1,2,3,4,5],  2],[ [1],  1],[ [1,2],  1]],
    structure: ["ListNode","number"]
  },
  {
    data: [[1,2,3,5],[],[1]],
    structure: ["ListNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/');
