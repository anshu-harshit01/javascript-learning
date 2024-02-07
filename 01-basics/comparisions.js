// console.log(2 >3);
// console.log(4 >= 2);
// console.log("12" > 22); //output = false
// console.log("4" > 2); // output = true

// console.log(null > 0); //output = false
// console.log(null == 0);//output = false
// console.log(null >= 0);//output = true

/* Note - The reason is that an equality check == and comparisions >, <,   >=, =< works differently.
Comparisions convert null to a number, treating it as 0.
That's why (3)null >= 0 is true and (1) null > 0 is false. */

// console.log(undefined == 0);// false
// console.log(undefined > 0);// false
// console.log(undefined < 0);// false

// Strict check = "===" this operator not only check the values but also check it's datatypes.
console.log("2"===2);
console.log(null === 0);
console.log("a" === 'a'); // returns true