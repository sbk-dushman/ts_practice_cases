// // Как найти все элементы на странице? 
// const items= document.getElementsByTagName('*');

 
// // console.log(items[65]);
// // как проверить что переменнная это массив 
// // console.log(Array.isArray(items));

// // const some_arry= [];
// // console.log(Arry.is);
// // В чём разница между event.stopPropagation() и event.stopImmediatePropagation()?
//  const btn = document.getElementById('inner');
//  const container = document.getElementById('outer');

//  document.addEventListener('click', (e)=>{ 
//    e.stopImmediatePropagation();
//     console.log('doc click'); });

//  btn.addEventListener('click',(e)=>{ 
//    //  e.stopPropagation(); 
//    //  e.stopImmediatePropagation();
// console.log(e.target );
// console.log(e.currentTarget);

    
// });
//    container.addEventListener('click', (e)=>{
//     console.log ('container click');
//  })

// /**
//  * @param {string} val
//  * @return {Object}
//  */

// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
// // сonst expect = function(val) {

// // };




// function summIIFE(a) {
//     return function(b) {
//         return  a + b;
//     }
// }
// console.log(summIIFE(1)(2));



//  const  createCounter = function(init) {
//         let base= init;
//         let current = init;
//     return{
//         increment(){
//             current = current + 1
//            return current;
//         },
//          reset(){
//             current = base;
//             return current;
//         },
//         decrement(){
//             current = current - 1
//            return current;
//         },
//     }
// };

// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4



// // Binary-SEARCH
// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length-1;

//     while (low<=high) {

//         const mid = Math.floor( (low+high) / 2);
//         const guess = list[mid];
       
//         console.log('предположение '+ guess );
        
//         if( guess === item ){
//             return mid;
//         } else if(guess > item ){
//              high = mid- 1;
//         } else{
//             low = mid + 1;
        
//         }
//     }
//       return false;
// }
// my_list = [1,2,3,5,7,9];
//  console.log('test 1 ' +binarySearch(my_list, 3));
// console.log('test 2' +binarySearch(my_list, -1));

const nums = [2, 7, 11, 15, 3, 6];
const target = 9;
const sorted = [...nums].sort((a,b) => a-b); 

const createCounter = ()=>{
    let counter = 0;
    return{
        incriment(){
           counter =  counter + 1  
            return counter;
        },
        decrement(){
          counter =  counter - 1  
            return  counter;
        },
        getValue(){
            return counter;
        }

    }
}
const map = function(arr, fn) {
       let res = []
    arr.forEach((element,i) => {
        res.push(fn(element,i))
    });
return res;
};