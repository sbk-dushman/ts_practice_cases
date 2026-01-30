// const createCounter = function(n) {
//         let c =n
        
//     return function() {
//          return c++;
//     };
// };

// const counter = createCounter(10)
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// // 10
 // 11
 counter() // 12
 const  createCounter = function(init) {
           let base= init;
        let current = init;
    return{
        increment(){
            current = current + 1
           return current;
        },
         reset(){
            init = base;
            return base;
        },
        decrement(){
            current = current - 1
           return current;
        },

    }
};
