// //20.09.25 21.09.25 разобрался с решением через интернет  
function sumArray(array) {
      if (!Array.isArray(array) || array.length < 3) return 0;
  let min = Infinity, max = -Infinity;
  let total = 0;
  for (const n of array) {
    total += n;
    if (n < min) min = n;
    if (n > max) max = n;
  }

  return total - min - max;
}
sumArray([ 6, 2, 1, 8, 10, ])


// function summArry(arry){
// let result = 0
// let prive = null;
// let low = null;
// let hg = null;

// arry.map(( item)=>{
//     debugger;
//     if (prive == null) {
//          prive = item;
//     }
//     if (prive <= item) {
//         low = prive;
//         hg = item;
//     }
//        if (prive >= item) {
//         low = item ;
//         hg = prive;
//     }
   

//     console.log('pev');
//     console.log(low);
    
    
// result = result + item;
// });
// console.log(result);
// }
// summArry([ 6, 2, 1, 8, 10 ]);


