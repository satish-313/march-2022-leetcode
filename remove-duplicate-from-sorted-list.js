const { print, a } = require("../linked-list/link-print");

// const deleteDuplicate = (head) => {
//   const root = head;

//   while (head && head.next) {
//     if (head.val === head.next.val) {
//       const temp = head.next;
//       head.next = temp.next;
//     }

//     if (head.next && head.val !== head.next.val) {
//       head = head.next;
//     }
//   }

//   return root;
// };

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const deleteDuplicate = (head) => {
  if (!head || !head.next) return head; // for empty or single linked list return head

  let current = new ListNode(0); // first node will not return or initial conditon
  let root = current;

  while (head) {
    if (head.next && head.val === head.next.val) { // to remove all repeated node
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      head = head.next;
      if (!head) current.next = null; // if repeated number present at end of linked list remove current.next to null
      continue;                      
    }

    if (head.next && head.val !== head.next.val) { // valid and non repeated number add to current;
      current.next = head;
      current = current.next;
      head = head.next;
      continue;
    }

    if (head.next === null) { // if a single or non repeated listed list present at end case
      current.next = head;    // condition
    }

    head = head.next; // to terminated the while loop
  }

  return root.next; // to return valid list and remove first or initial condition
};

print(deleteDuplicate(a));
