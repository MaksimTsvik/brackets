module.exports = function check(str, bracketsConfig) {
  // Check string length (if str.length % 2!=0 -> false)
  if (str.length % 2) {
    return false;
  }
  // Create an 'bracket' array to store each unclosed bracket
  // Let's inspect if each elem in str is equal to 1st elem (0) in each config element
  // if yes - add into 'bracket' array
  // if no check with 2nd elem (1) in each config element and with last elem in 'counter'
  // if yes - remove 1 last elem from 'bracket' array
  // if no - continue to inspect
  let bracket = [];

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {

      if (str[i] == bracketsConfig[j][0]) {
        bracket.push(str[i]);
      }

      if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == bracket[bracket.length - 1]) {
        bracket.pop();

      }

    }

  }

  if (bracket.length != 0) {
    return false;
  }

  return true;
}
