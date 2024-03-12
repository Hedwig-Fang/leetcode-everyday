/*
* 206.反转链表 
* 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
*  
* 示例 1：
* 输入：head = [1,2,3,4,5]
* 输出：[5,4,3,2,1]
* 示例 2：
* 输入：head = [1,2]
* 输出：[2,1]
* 示例 3：
* 输入：head = []
* 输出：[]
*  
* 提示：
* 	链表中节点的数目范围是 [0, 5000]
* 	-5000 
*  
* 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function(head) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  reverseList,
  {
    data: [[ [1,2,3,4,5]],[ [1,2]],[ []]],
    structure: ["ListNode"]
  },
  {
    data: [[5,4,3,2,1],[2,1],[]],
    structure: ["ListNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/reverse-linked-list/');
