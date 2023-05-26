//Set = value만을 저장하고 중복을 허용하지 않는다.

let set = new Set();
let num = new Set([1,2,3,4,5]);
let str = new Set("hello!"); // ll => l이 중복이라 하나만 출력된다.

console.log(set);
console.log(num);
console.log(str);

set.add(1).add(1).add(10).add(20);
console.log(set);
console.log(set.has(10));

for(let item of str){
    console.log(item);
}
for(let item of str.entries()){
    console.log(item);
}