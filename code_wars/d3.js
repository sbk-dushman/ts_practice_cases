function boolToWord( bool ){
  return bool?"Yes":"No"
}
//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript


// task2
function positiveSum(arr) {
 let summ = 0;
  arr.map((item)=>{
    if(item<0){
        return summ
    } 
   return summ = summ + item;

  });
    return summ;
}
positiveSum([1, -4, 7, 12]); 
//https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript