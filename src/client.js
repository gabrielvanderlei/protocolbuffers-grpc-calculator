let {
  grpc,
  calculator,
  PORT
} = require('./lib/configuration')

let readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);
let client = new calculator.Calculator(PORT, grpc.credentials.createInsecure());

console.log('Please send your command with the following format: operation firstNumber secondNumber');
console.log('Available operations: +, -, /, *');
console.log('Example: + 1 1');

let clientOperationHandler = (operation, data, callback) => {
  let returnOperation;

  switch(operation){
    case "+": returnOperation = client.sum(data, callback); break;
    case "-": returnOperation = client.subtraction(data, callback); break;
    case "/": returnOperation = client.division(data, callback); break;
    case "*": returnOperation = client.multiplication(data, callback); break;
  }

  return returnOperation;
}

rl.on('line', (message) => {
  let messageSplitted = message.split(' ');

  if (messageSplitted.length == 3) {
      let operation = messageSplitted[0];
      let firstNumber = messageSplitted[1];
      let secondNumber = messageSplitted[2];

      let sendOperation = clientOperationHandler(operation, { firstNumber, secondNumber }, function (err, response) {
        if(!err){
          console.log('Answer:', response.answer);
        } else {
          console.log('Error processing data')
        }
      });

      if(!sendOperation) {
        console.log('Invalid operation')
      }
  } else {
      console.log(`Message format: operation firstNumber secondNumber. Example: + 1 1`)
  }
});