function smash (words) {
   let result ='' 
   words.map((w)=> {
    result+=w+' ';
    
   } );
  return  result.trim();
};
smash(['s','u','s']);
// v2
function smash (words) {
   let result = words.join(' '); 
  return  result;
};
smash(['work','it','ok']);
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript


