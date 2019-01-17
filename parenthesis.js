let subString1;
let subString2;
let subLength1;
let subLength2;
let subString3;
let subLength3;

let char2;
let char3;
let n=0;

let findMatchingPair = function(string){
    let charArray = string.split('');
    let char1 = charArray[0];
    if (char1 == '('){
        char2 = ')';
    }
    if (char1 == '{'){
        char2 = '}';
    }
    if (char1 == '['){
        char2 = ']';
    }
    for (i=1; i<string.length; i++){
        char3 = charArray[i];
        if (char3===char1){
            n++;
        }
        if (char3===char2){
            if (n===0){
                return i;
            }
            else{
                n--;
            }
        }
    }
}



//let findMatchingPair = 
let x;
let y;

let checkValid = function(string){
    let length = string.length;
    x = findMatchingPair(string);
    if (x===undefined){
      console.log('is false');
      return;
    }
    else{
      console.log('x =' + x);
      subString1 = string.substring(1,x);
      console.log('substring1 =' + subString1);
      subLength1 = subString1.length;
      console.log('sublength 1 =' + subLength1);
      length = length - subLength1;
      
      if (subLength1 === 0){
          subString2 = string.substring(x+1, length);
          subLength2 = subString2.length;
          console.log('substring2 =' + subString2);
          console.log('sublength2 =' + subLength2);
          
          if (subLength2 === 0){
                console.log('is true')
                return;
          }
          else if (subLength2 === 1){
              console.log('is false')
              return;
          }
          else{
              checkValid(subString2);
          }
      }
      else if ((subLength1 % 2) != 0){
          console.log('is false');
          return;
      }
      else {
          console.log('last substring1 =' + subString1);
          checkValid(subString1);
      }
    }
}

console.log(checkValid('{}[]({{}})'));