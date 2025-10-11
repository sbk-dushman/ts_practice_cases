//11.10.2025
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
    let counter = 0;
  sheep.map((item)=>{
     
    if((item!= null || item != 'undefined') && item === true)
    counter = counter + 1;
    })
    return counter;
}
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]);