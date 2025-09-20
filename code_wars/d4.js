//20.09.25
function summArry(arry){
let result = 0
let prive = null;
let low = null;
let hg = null;

arry.map(( item)=>{
    debugger;
    if (prive == null) {
         prive = item;
    }
    if (prive <= item) {
        low = prive;
        hg = item;
    }
       if (prive >= item) {
        low = item ;
        hg = prive;
    }
   

    console.log('pev');
    console.log(low);
    
    
result = result + item;
});
console.log(result);
}
summArry([ 6, 2, 1, 8, 10 ]);
