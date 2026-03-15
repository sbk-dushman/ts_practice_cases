//https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
const map = function(arr, fn) {
       let res = []
    arr.forEach((element,i) => {
        res.push(fn(element,i))
    });
return res;
};