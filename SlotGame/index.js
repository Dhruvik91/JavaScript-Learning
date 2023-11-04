const {
    matchPattern,
  } = require('./utils.js');

  function countMoney() {

    const matchedPatterns = matchPattern();
    const countScore = matchedPatterns.reduce((acc, item) => acc + item.count, 0);
    const money = countScore * 2;
    return money;
}

function Game() {
    
     
  

}