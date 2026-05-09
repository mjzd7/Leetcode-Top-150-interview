// Last updated: 09/05/2026, 16:32:33
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
 let arr = new Array(ratings.length).fill(1);
 let sum =0;

 //left pass
 for (let i=1;i<ratings.length;i++)
    if(ratings[i]>ratings[i-1]){
        arr[i]=arr[i-1]+1;
    }
    //right pass
    for (let i= ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
                arr[i]= Math.max(arr[i],arr[i+1]+1)
        }
    }
    //Total of arr
    for (i=0;i<ratings.length;i++){
        sum+=arr[i];
    }
    return sum
};