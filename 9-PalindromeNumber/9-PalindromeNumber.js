// Last updated: 14/04/2026, 09:38:53
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
if(x<0){
    return false;
}
   let array = (x+'').split('');

for(let i=0;i<array.length;i++){
        if(array[i] == array[array.length-i-1]){
            
            continue
        }
        else return false; 
    }
 return true
};