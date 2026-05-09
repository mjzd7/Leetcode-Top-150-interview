// Last updated: 09/05/2026, 18:34:59
/*
 * This solution use 4 variables, up down, total and peak. Works on logic of upward vs downward slope
 * if Going up
 * increment up,reset down, update peak = up, add up+1 to total
 * if going down
 * increment down, reset up, add down to total
 * if down>peak, add an extra one to account for the peak needing to grow
 * if equal
 * Reset everything and add 1 to the total
*/

1/**
2 * @param {number[]} ratings
3 * @return {number}
4 */
5var candy = function(ratings) {
6   let up = 0;
7   let down = 0;
8   let peak = 0; 
9   let total = 1;
10
11
12   for(i=1; i < ratings.length;i++){
13    if(ratings[i]>ratings[i-1]){
14        up++;
15        down = 0;
16        total+= up+1;
17        peak=up;
18    }
19    if (ratings[i]<ratings[i-1]){
20        down++;
21        up = 0;
22        if(down>peak){
23            total+=down+1;
24        }
25        else total+=down;
26    }
27    if (ratings[i]==ratings[i-1]){
28        up = 0;
29        down=0;
30        peak = 0;
31        total+=1;
32    }
33
34   } 
35   return total;
36};
37