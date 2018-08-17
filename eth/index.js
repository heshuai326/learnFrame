var api = require('etherscan-api').init('DNG9YWZ6U44Z3V1PQQHMNUAAW241Z9RP28');
var balance = api.account.balance('0x65e7Fd5479beB0D11C0073259E22809E2e3BEa6e');
balance.then(function(balanceData){
  console.log(balanceData);
});