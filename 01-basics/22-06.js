// function abcd()
// {
//     var a = 12;
//     console.log(a);
//     console.log(b);
//     function abs()
//     {
//         var b = 10;
//     }
// }
// abcd();
// var a = [1, 2, 3, 4];
// var b= [...a];
// b.pop();
// console.log(a);
// console.log(b);

// var a ={
//     name:"Anshu",
//     roll:123
// }
// var b = {...a};
// b.name="Harshit";
// console.log(a.name);
// console.log(b.name);
// var a=[1,2,3,4,5,6];
// a.forEach(function(val){
// console.log(val+1);
// })
// console.log(a);
// var employee={
//     name :"Ramesh",
//     salary:12000,
//     address:"katira"
// }
// for(var val in employee){
//     console.log(employee[val]);
// }
function first(a){
    a();
}
first(function(){console.log("in val");})
var a=[12,23];
a[-1] = -12;
a[-2] = -16;
console.log(a);
console.log(typeof(a));