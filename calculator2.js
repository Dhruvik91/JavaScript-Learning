let calculator = {
    
    sum(a, b) {
       return a + b;
        
         
    },
    sub(a, b) {
        return a - b;
        
    },
    mul(a, b) {
        return a * b;
        
         
    },
    div(a, b) {
        
        return a / b;
        
    }
};
/**  */

   /*  calculator.read();
    alert(calculator.sum()); */
    //alert( calculator.mul() );

     function average(...args) { // args is the name for the array
        let sums = 0;
      
        for (let arg of args) {
          sums = calculator.sum(sums,arg);
        }
      
        return calculator.div(sums,(args.length));  
      }
   
console.log(average(1,2,4,5));