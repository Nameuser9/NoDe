function choose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  
  function random_sym() {
        const syms = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j','k', 'l', 'm','n', 'o', 'p','q', 'r',
         's','t', 'u', 'v','w', 'x', 'y','z'];
        const SYMS = ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J','K', 'L', 'M','N', 'O', 'P','Q', 'R',
            'S','T', 'U', 'V','W', 'X', 'Y','Z'];
            let uppercase = Math.round(Math.random())
            if (uppercase == 0) {
                return choose(syms);
                }
            else{
                return choose(SYMS);
            }
         
  }

  
  function random_dig() {
      return Math.ceil(Math.random() * 10)
  }
  
  function genPassword() {
      let result = '';
      for (let i = 0; i < 10; i++) {
          let choice = choose(['digit', 'symbol']) 
          if (choice === 'digit') {
              result += random_dig().toString();
          }
          else {
            
            result += random_sym();
         }
  
              
          }
      
      return result;
    }
  
  module.exports = { genPassword };
  