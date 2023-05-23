let fruits = ["apple", "orange", "melon"];

fruits.push("watermelon"); // push = 배열 뒤에 추가
console.log(fruits);
console.log(fruits.length);


fruits.pop(); //pop = 배열 맨뒤 삭제
console.log(fruits);
console.log(fruits.length);

fruits.unshift("watermelon");  //unshift = 배열 맨앞에 추가
console.log(fruits);
console.log(fruits.length);

fruits.shift(); //shift = 배열 맨앞 삭제
console.log(fruits);
console.log(fruits.length);

console.log(fruits.splice(1)); // splice(1) = index(1) 뒤로 배열 출력 = 삭제
console.log(fruits); // splice를 쓰면 잘리고 남은게 남는다.

fruits = ["apple", "orange", "melon","strawberry"];

ret = fruits.splice(1,1); // 1,1 = 매개변수로 받아 orange만 짤리고 나머지는 배열에 남는다.
console.log(ret);
console.log(fruits);

ret = fruits.splice(1,1, "mango","kiwi"); // 자르고 뒤에 매개변수를("mango", "kiwi") 주면 그 값들이 잘린값에 들어가진다.
console.log(ret);
console.log(fruits);

let fruits1 = ["apple", "orange", "melon"];
console.log(fruits1.slice(1));
console.log(fruits1); // slice = 원본 데이터엔 영향을 미치지않아서 그대로 남아있는다.
let fruits1_add = ["cheery","banana"];

console.log(fruits1.concat(fruits1_add)); //concat = 얘도 원본데이터는 건드리지않고 병합
console.log(fruits1);

//배열 반복문
let fruits2 = ["apple", "orange", "melon"];
for(let i = 0; i < fruits2.length;i++){
    console.log(fruits2[i]); //index 접근 [i]
}

for(let i of fruits2){
    console.log(i); // i에 fruits2에 있는 값들이 하나하나 들어간다고 생각하면된다.
}

for(let key in fruits2){
    console.log(fruits2[key]);
}
