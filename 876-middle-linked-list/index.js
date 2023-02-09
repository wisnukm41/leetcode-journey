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
var middleNode = function(head) {
    let p1 = head, p2 = head;

    while(p2 != null && p2.next != null){
        p1 = p1.next;
        p2 = p2.next.next;
    }

    return p1
};

