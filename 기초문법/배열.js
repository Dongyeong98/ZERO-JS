let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["Apple", "Orange", "Melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//데이터 변경
fruits[1] = "Kiwi";
console.log(fruits);

let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums);
console.log(nums.length);

delete nums[1];
console.log(nums); // delete 를해도 length는 같다.