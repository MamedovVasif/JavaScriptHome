let num = prompt("eded daxil edin")
function fibonacci(num){
    let a = 1, b = 0, c;
  
    while (num >= 0){
      c = a;
      a = a + b;
      b = c;
      num--;
    }
  
    return b;
  }
  console.log(fibonacci(num));