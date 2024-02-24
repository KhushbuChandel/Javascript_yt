const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail="hc@hc.com"
accountPassword="Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountId)
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/