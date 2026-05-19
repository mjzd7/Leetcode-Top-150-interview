// Last updated: 20/05/2026, 04:00:58
// Think of this code as a shopkeeper returning notes to you, but instead of just 1,5,10 notes, think of it as 1,4,5,9,10,40,50,90,100... notes. and keep the values strictly decreasing. keep a string and keep subtracing value of num if condition matches. return the string.
1/**
2 * @param {number} num
3 * @return {string}
4 */
5var intToRoman = function(num) {
6    let string = '';
7    while(num>=1000){
8        num -= 1000;
9        string += 'M';
10    }
11    if(num>=900){
12    num -= 900;
13    string+='CM';
14    }
15    if(num>=500){
16        num -= 500;
17        string += 'D';
18    }
19    if(num>=400){
20    num -= 400;
21    string+='CD';
22    }
23    while(num>=100){
24        num -= 100;
25        string += 'C';
26    }
27    if(num>=90){
28    num -= 90;
29    string+='XC';
30    }
31    while(num>=50){
32        num -= 50;
33        string += 'L';
34    }
35    if(num>=40){
36    num -= 40;
37    string+='XL';
38    }
39    while(num>=10){
40        num -= 10;
41        string += 'X';
42    }
43    if(num>=9){
44    num -= 9;
45    string+='IX';
46    }
47        if(num>=5){
48    num -= 5;
49    string+='V';
50    }
51        if(num>=4){
52    num -= 4;
53    string+='IV';
54    }
55    while(num>=1){
56        num -= 1;
57        string += 'I';
58    }
59    if(num === 0){
60        return string;
61    }
62
63};