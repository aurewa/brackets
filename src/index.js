module.exports = function check(ex, config) {
  
  let openSymbols = [];
  let closeSymbols = [];
  
  Object.values(config).map(x => {
      openSymbols.push(x[0]);
      closeSymbols.push(x[1]);
  });
  
  let stack = [];
  var triggered = false;

  for (var item of ex.split('')){ 

    let closeIndex = closeSymbols.indexOf(item);
    if (closeIndex !== -1) {        

      if (stack.length == 0 && item !== "|") return false;

      let openIndex = openSymbols.lastIndexOf(stack[stack.length-1]);
      if (openIndex === closeIndex){
        stack.pop();
        continue;
      }
    }

    if (openSymbols.indexOf(item) !== -1){
      stack.push(item);
    }
  }
  
  return stack.length === 0;
}
