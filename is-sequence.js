const isSequence = (s,t) => {
  let index = 0;
  for(let ele of t){
    if(ele === s[index]) index += 1;
  }

  return index === s.length
}

console.log(isSequence("ace","ahbegc"))