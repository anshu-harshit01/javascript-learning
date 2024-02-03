const accountId = 18475
let accountEmail = "anshu12@gmail.com"
var accountPassword = "19243"
branch = "BOB"
let accountState;
/*
Prefer not to use "var"
Because of issue in block scope and functional scope.
*/ 
// accountId = 12345
accountEmail="abs@gmail.com"
accountPassword = "098765"
console.log(accountId)
console.log(accountEmail)
console.table([accountId, accountEmail, accountPassword, branch,accountState])