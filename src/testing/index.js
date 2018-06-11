var sayHello = function (name = 'Grevisse') {
  console.log('hello ' + name);
}
var alerting = function () {
  alert('I am the best');
}
module.exports = {
  sayHello,
  alerting
}