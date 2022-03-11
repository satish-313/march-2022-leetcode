const { print, a } = require("../linked-list/link-print");

const rotateRight = (head, k) => {
  if(!head) return head;
  let len = 0
  let current = head, ahead = head , result;
  
  while (current) {
    len += 1;
    current = current.next;
  }

  k = k % len;
  if (k === 0) return head;

  len = len - k;
  current = head;

  while (len--) {
    ahead = ahead.next;
    if(len === 0){
      current.next = null
    }
    current = current.next
  }

  result = ahead;
  while(ahead){
    if(!ahead.next) {
      ahead.next = head;
      break;
    }
    ahead = ahead.next
  }

  return result;
};

print(rotateRight(a, 1));
