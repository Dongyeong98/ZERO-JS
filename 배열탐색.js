let fruits  = ["apple" , "orange","banana" , "orange" , "melon"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange")); // 없는건 -1로 반환
console.log(fruits.indexOf("orange",2)); // 2번째 orange 인덱스번호를 반환

console.log(fruits.lastIndexOf("orange"));

console.log(fruits.includes("banana")); //includes = 값이 있는지 없는지 확인해서 true, false 로 반환
console.log(fruits.includes("watermelon"));

//Array.sort() => 오름차순 배열 정렬
//Array.reverse() => 내림차순 배열 정렬

let nums = [1,-1,4,5,2,0];
console.log(nums);
console.log(nums.sort());
console.log(nums.reverse());
console.log(fruits.sort()); // 문자열도 정렬 가능

//Array.join => 배역 값을 문자열로 반환
let str = fruits.join();
console.log(str); // , 기준으로 문자열

let str_separator =  fruits.join(";");
console.log(str_separator);

let result = str_separator.split(";")
console.log(result); //split = ; 기준으로 배열로 반환