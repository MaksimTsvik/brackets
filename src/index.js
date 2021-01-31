module.exports = function check(str, bracketsConfig) {
  // Check string length (if !%2=0 -> false)
  if (!(str.length % 2)) {
    return false;
  }
  // Create an 'bracket' array or other counter
  // Let's inspect if each elem in str is equal to 1st elem (0) in each config element
  // if yes - add into 'bracket' array
  // if no check with 2nd elem (1) in each config element and with last elem in 'counter'
  // if yes - remove 1 last elem from 'bracket' array
  // if no - false
  let bracket = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if 
    }
  }





  return true;
}
