let {
  grpc,
  calculator,
  PORT
} = require('./lib/configuration')

function sum(call, callback) {
  let returnData = { answer: call.request.firstNumber + call.request.secondNumber }
  console.log(returnData)
  callback(null, returnData);
}

function subtraction(call, callback) {
  let returnData = { answer: call.request.firstNumber - call.request.secondNumber }
  console.log(returnData)
  callback(null, returnData);
}

function division(call, callback) {
  let returnData = { answer: call.request.firstNumber / call.request.secondNumber }
  console.log(returnData)
  callback(null, returnData);
}

function multiplication(call, callback) {
  let returnData = { answer: call.request.firstNumber * call.request.secondNumber }
  console.log(returnData)
  callback(null, returnData);
}

let server = new grpc.Server();

server.addService(calculator.Calculator.service, {
  sum,
  subtraction,
  multiplication,
  division
});

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});