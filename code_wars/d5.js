// 21.09.25
function solution(str){
let step_one = str.split("");
 let step_two = step_one.reverse();
 const res = step_two.join("");
 return res;
 
}
solution("mox");