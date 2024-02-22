function calculator() {
  let userInput = prompt("Please enter a number: ");
  let num1 = Number.parseInt(userInput);
  
  userInput = prompt("Please enter another number: ");
  let num2 = Number.parseInt(userInput);
  
  userInput = prompt("Please enter a mathematical operator (+, -, *, /): ");
  let op = userInput;
  
  let result;
  

  switch(op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;  
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return "Invalid operation"
  }
return `${num1} ${op} ${num2} = ${result}`;
}

console.log(calculator());
