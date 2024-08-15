const accountId = 144553
let accountEmail = "rubbintaleb@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "54321"
accountCity = "Demra"

/*
Prefer not use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
