// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// a, e, i, o, u
function wh(str) {
   let res = 0;
    const string = str.split('');
for (let index = 0; index < string.length; index++) {
    if (string[index] === 'a' || 
        string[index] === 'e' || 
        string[index] === 'i' ||
        string[index] === 'o' ||
        string[index] === 'u') {
        
         res = res+1;
    }
}   return res;
}