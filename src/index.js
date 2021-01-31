module.exports = function check(str, bracketsConfig) {
  // Check string length (if str.length % 2!=0 -> false, each bracket should have its pair!)
  if (str.length % 2) {
    return false;
  }
  // Create a 'bracket' array to store each unclosed bracket (only open)
  let bracket = [];
  /* 
   We compare each elem in 'str' with each element in 'bracketsConfig' 
   - if it is closing bracket and equal to element[j][1], and also previously added element is open bracket (element[j][0]) which
     is equal to the last element of 'bracket' -> we delete it.
     We need to use cntinue/break or else statements not to add same type of brackets!
   - in other case we add one more element to 'bracket' - that mean that we found one more open bracket
  */
  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {

      if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == bracket[bracket.length - 1]) {
        bracket.pop();
        continue; // We could use 'break' or 'else if' next to this 'if'
      }

      if (str[i] == bracketsConfig[j][0]) {
        bracket.push(str[i]);
      }

    }

  }
  //We inspect 'bracket' array, and if there are any open brackets result is falsy
  if (bracket.length != 0) {
    return false;
  }

  return true;
}
