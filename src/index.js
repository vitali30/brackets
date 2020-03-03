module.exports = function check(str, bracketsConfig) {
  
  const brackets = bracketsConfig.map(function entering(element){return element.join('');});

  // console.log(brackets);

  //console.log(str)
  for(let i =0 ; i< str.length + 50 ; i++){
  brackets.forEach(function deleting(element){str = str.replace(element, '')});
  
  }
  // console.log(str)
  //console.log(!str)
  return (!str)
}
module.exports('((()))()',[['(', ')']])
 // -> true
//  assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7), false);
//  [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]

