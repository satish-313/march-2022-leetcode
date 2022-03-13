const { a, print } = require("../linked-list/link-print");

class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

const copyRandomList = (head) => {
  if (!head) return null;
  let node = new Node(0, null, null),
    res = node;
  let current = head,
    map = {},
    index = 0;

  while (current) {
    let temp = new Node(current.val, null, null);
    node.next = temp;
    node = node.next;
    map[node.val + "," + index] = node;
    current.val = current.val + "," + index;
    current = current.next;
    index += 1;
  }

  node = res.next;
  current = head;
  while (current) {
    if (current.random === null) node.random = null;
    else if (current.random.val in map) {
      node.random = map[current.random.val];
    }
    current = current.next;
    node = node.next;
  }

  return res.next;
};

print(copyRandomList(a));
