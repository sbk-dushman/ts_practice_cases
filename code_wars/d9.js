https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// 18.12.25
function numberToString(num) {
     console.log(num+=""); 
    return num+="";
}
// numberToString(1);
//2  начнал 18.12.12 закончил https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function DoubleChar(char){
   let s='';
  char.split("").map((i)=>{
    s=s+i+i
  });
  return s;
}
DoubleChar('abcd');
// todo
// решение из каты разобрать 
split - делит строку на элементы массива
map проходится по нему дублируя каждый элемент 
получается массив с удойными символами 
join- cоеденяет массив в одну строку
// const doubleChar = (str) => str.split("").map(c => c + c).join("");