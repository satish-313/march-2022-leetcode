const { a, print } = require("../linked-list/link-print");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  const node = new ListNode(0);
  const root = node;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    node.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    l1 = l1?.next;
    l2 = l2?.next;
    node = node.next;
  }

  return root.next;
};

print(addTwoNumbers(a, a));
