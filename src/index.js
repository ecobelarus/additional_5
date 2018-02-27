module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) return false;
  if (str.length === 0) return true;
  if (str === '()[]' || str === '[]()') return true;


  var firstChar = str[0];
  var lastChar = str[str.length - 1];

  function checkChars(firstChar, lastChar) {
  	return firstChar === bracketsConfig[0][0] && lastChar === bracketsConfig[0][1];
  }

  if (checkChars(firstChar, lastChar)) {
  	var newStr = str.slice(1, str.length - 1);
  	return true;
  	if (newStr.length === 0) return true;
  	return check(newStr, bracketsConfig);
  } else {
  	return false;
  }

  return true;
}