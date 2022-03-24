const numRescueBoats = (people, limit) => {
  if (people.length === 1) return 1;

  const peopleSort = people.sort((a, b) => a - b);
  let rescueBoats = 0,i = 0 , j = peopleSort.length - 1;

  while (i <= j) {
    let weight = peopleSort[i] + peopleSort[j];

    if (weight <= limit) {
      rescueBoats += 1;
      i += 1;
      j -= 1;
    } else if (peopleSort[j] <= limit) {
      rescueBoats += 1;
      j -= 1;
    }
  }

  return rescueBoats;
};

console.log(numRescueBoats([6, 3, 1, 5, 5, 6, 4], 7));
// console.log(numRescueBoats([1, 2], 3));
// console.log(numRescueBoats([3, 2, 2, 1], 3));
// console.log(numRescueBoats([5, 3, 3, 4], 5));
// console.log(numRescueBoats([1, 2, 4, 5], 6));
