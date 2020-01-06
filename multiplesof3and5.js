
function MultiplesOf3and5(number) {
  let result = 0;
  for(let i=3; i<number; i++){
    if(i%3 === 0 || i%5 === 0) result += i;
  }
  return result;
}

module.exports = MultiplesOf3and5;