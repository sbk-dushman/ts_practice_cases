// Как найти все элементы на странице? 
const items= document.getElementsByTagName('*');

 
// console.log(items[65]);
// как проверить что переменнная это массив 
// console.log(Array.isArray(items));

// const some_arry= [];
// console.log(Arry.is);
// В чём разница между event.stopPropagation() и event.stopImmediatePropagation()?
 const btn = document.getElementById('inner');
 const container = document.getElementById('outer');

 document.addEventListener('click', (e)=>{ 
   e.stopImmediatePropagation();
    console.log('doc click'); });

 btn.addEventListener('click',(e)=>{ 
   //  e.stopPropagation(); 
   //  e.stopImmediatePropagation();
console.log(e.target );
console.log(e.currentTarget);

    
});
   container.addEventListener('click', (e)=>{
    console.log ('container click');
 })


