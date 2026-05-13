/*
2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultLL = new ListNode() // the starting node will be set to zero as defined in the 
                                  // singly linked list
    let resultCurrPtr = resultLL // reference the resulting node ie the linked list being returned 
    let carry = 0

    while (l1 || l2 || carry) { // check if a value exist for the linked list or the carry
        // assign a default value ie 0 if a node is empty
        v1 = l1 ? l1.val : 0
        v2 = l2 ? l2.val : 0

        /* ?. operator can also be used */
        // v1 = l1?.val ?? 0
        // v2 = l2?.val ?? 0

        // add the node numbers
        let sum = v1 + v2 + carry
        let singleVal = sum % 10
        carry = Math.floor(sum / 10)

        // set the the sum to the next value instead, just so the total sum is reversed
        resultCurrPtr.next = new ListNode(singleVal)

        // update the pointers
        resultCurrPtr = resultCurrPtr.next
        l1 = l1 ? l1.next : null //update the pointer to the next 
        l2 = l2 ? l2.next : null

        /* ?. operator can also be used */
        // l1 = l1?.next ?? null
        // l2 = l2?.next ?? null
    }

    return resultLL.next // we return from the next value to the end of the linked because the first value in the linked list is zero
};

/***********************************************************************
            How a gigachad would solve the problem🗿💪
***********************************************************************/
var addTwoNumbers = function(l1, l2) {
    let refLL = new ListNode()
    let headPtrLL = undefined

    let carry = 0

    while (l1 || l2 || carry > 0) {
        if (!headPtrLL) {
            headPtrLL = refLL // cater for first iteration
        } else {
            refLL.next = new ListNode() // create a new node for the reference
                                        // linked list
            refLL = refLL.next // update the pointer of the reference linked list
        }


        let sum = carry

        sum += (l1?.val ?? 0) + (l2?.val ?? 0)

        l1 = l1?.next ?? null
        l2 = l2?.next ?? null

        carry = sum >= 10 ? 1 : 0
        let sumSingVal = sum % 10

        refLL.val = sumSingVal // update the current node with single value sum
    }

    return headPtrLL
};


/*
    Concepts to know to solve the problem
    =====================================
    - ListNode refers to a single node not the whole linked list
    - To get the carry after a summation operation, floor divide the sum by 10 e.g 15 // 10 = 1
    - To get the single value to write after the summation apply (% 10) on the sum
*/