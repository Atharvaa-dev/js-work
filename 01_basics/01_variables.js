const accountId = 123
let accountEmail = "assdf@gmail.com"
var accountPassword = "123456"
accountCity = "mumbai"
let accountState;

// accountId = 234 //not allowed



accountEmail = "wwewr@gmail.com"
accountPassword = "233546"
accountCity = "Delhi"

console.log(accountId);


/*
prefer not to use var 
because of issue  in block scope and functional scope
*/

console.table([accountId, accountCity, accountEmail, accountPassword, accountState]);