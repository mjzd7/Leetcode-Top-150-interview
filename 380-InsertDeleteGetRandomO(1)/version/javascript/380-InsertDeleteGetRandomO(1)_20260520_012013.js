// Last updated: 20/05/2026, 01:20:13
// 💡 Core Concept & StrategyTo achieve an average time complexity of $O(1)$ for insert, remove, and getRandom simultaneously, we must combine two data structures because neither can do it alone:Dynamic Array (this.arr): Allows us to get a random element in $O(1)$ time because elements are stored sequentially by index (0 to length - 1).Hash Map (this.map): Provides $O(1)$ lookups to check if an element exists, and maps the element's value to its current index in the array (value -> index).⚡ The "Swap and Pop" Trick (Crucial for $O(1)$ Deletion)Normally, deleting an element from the middle of an array takes $O(n)$ time because all subsequent elements have to shift left.The $O(1)$ Workaround:Look up the index of the element to delete using the Map.Find the last element in the array.Overwrite the target element's position with the last element.Update the Map so the last element points to its new index.Pop the last element off the array (this.arr.pop()), which is always an $O(1)$ operation.⚠️ Common JavaScript Traps to RememberThe this Keyword: In JavaScript class prototypes, you must explicitly use this.map and this.arr. Forgetting this. treats the variable as a global or local variable, triggering a ReferenceError: map is not defined.The return Trap: Functions like getRandom must explicitly use the return keyword. Simply computing this.arr[index] without returning it passes undefined back to the caller.Edge Case - Deleting the Last Element: When the element you want to delete is already the last element in the array, you don't need to swap it. Ensure your this.arr.pop() happens outside of any conditional swap blocks so it always runs.📊 Complexity AnalysisTime Complexity: * insert: Average $O(1)$remove: Average $O(1)$getRandom: $O(1)$Space Complexity: $O(n)$ to store $n$ elements in both the Map and the Array.
1
2var RandomizedSet = function() {
3    this.map = new Map();
4    this.arr = [];
5};
6
7/** 
8 * @param {number} val
9 * @return {boolean}
10 */
11RandomizedSet.prototype.insert = function(val) {
12   if(this.map.has(val)) return false; 
13
14   this.map.set(val,this.arr.length);
15   this.arr.push(val);
16   return true;
17};
18
19/** 
20 * @param {number} val
21 * @return {boolean}
22 */
23RandomizedSet.prototype.remove = function(val) {
24    if(!this.map.has(val)) return false;
25    let index = this.map.get(val);
26    let last = this.arr[this.arr.length-1];
27    this.map.delete(val);
28
29    if(index!== this.arr.length -1){
30        this.arr[index] = last; 
31        this.map.set(last, index);
32       
33    }
34 this.arr.pop();
35        return true;
36};
37
38/**
39 * @return {number}
40 */
41RandomizedSet.prototype.getRandom = function() {
42    let randomIndex = Math.floor(Math.random()*this.arr.length);
43    return this.arr[randomIndex];
44};
45
46/** 
47 * Your RandomizedSet object will be instantiated and called as such:
48 * var obj = new RandomizedSet()
49 * var param_1 = obj.insert(val)
50 * var param_2 = obj.remove(val)
51 * var param_3 = obj.getRandom()
52 */