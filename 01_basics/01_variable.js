const accountId = 23144017
let accountEmail = "sp@gmail.com"
var accountpassword = "1234"
accountCity = "Siliguri"

//accountId = 23144004
accountEmail = "scholar@1910"
accountpassword ="2341"
accountCity = "Bengulure"

console.table([accountId,accountEmail,accountpassword,accountCity]);
var user = "Alice";
var user = "Bob"; // No error! You just accidentally overwrote your variable.

// --- let is safe ---
let score = 10;
score = 20; // OK! You updated the value.
//let score = 30; SyntaxError! You can't recreate the same name in this room.

// --- const is permanent ---
const PI = 3.14;
//PI = 3.15;  TypeError! You cannot change a constant.