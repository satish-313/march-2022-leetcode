const hasCycle = (head) => {
  if (head === null) return false;

  let ahead = head;

  while (ahead && ahead.next) {
    head = head.next;
    ahead = ahead.next.next;
    if (ahead === head) return true;
  }

  return false;
};
