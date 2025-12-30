const createCounter = function(n) {
        let c =n
        
    return function() {
         return c++;
    };
};

const counter = createCounter(10)
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
// 10
 // 11
 counter() // 12