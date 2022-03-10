const { a, print } = require("../linked-list/link-print");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  let node = new ListNode(0),
    root = node;

  function reverse(p, c) {
    let n;
    while (c) {
      n = c.next;
      c.next = p;
      p = c;
      c = n;
    }

    return p;
  }

  let p1 = null
  p1 = reverse(p1, l1);

  let p2 = null
  p2 = reverse(p2,l2)

  let carry = 0;
  while (p1 || p2 || carry) {
    let sum = (p1?.val || 0) + (p2?.val || 0) + carry;

    node.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    p1 = p1?.next;
    p2 = p2?.next;
    node = node.next;
  }

  let result = null
  return reverse(result,root.next);
};

print(addTwoNumbers(a, a));
