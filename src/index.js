module.exports = function check(str, bracketsConfig) {
  
  const brackets = bracketsConfig.map(function entering(element){return element.join('');});

  for(let i =0 ; i< str.length + 50 ; i++){
  brackets.forEach(function deleting(element){str = str.replace(element, '')});
  
  }
  
  return (!str)
}


