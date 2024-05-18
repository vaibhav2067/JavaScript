const accountId = 14453
let accountEmail = "vaibhav06734@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vaibhav@gmail.com"
accountPassword = "212121"
accountCity = "Bangaluru"

/*
Prefer Not to use var 
beacause of isssue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])