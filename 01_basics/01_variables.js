const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState
// accountId = 2 // not valid to change const
accountEmail = "kumar@gmail.com"
accountPassword = "567"
accountCity = "Chittoor"
/* 
    do not use var becaues of issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])