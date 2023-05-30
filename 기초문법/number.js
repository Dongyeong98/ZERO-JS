let us = 1e-6;

console.log(us.toString());

//String로 형변환
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof (us + ""));

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3));
console.log((num_1 - num_2).toPrecision(3));

console.log(Number.isNaN(0.123)); //isNaN = not a number 이냐? 묻는함수
console.log(Number.isNaN(123/"hello"));
console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("hello")); //isFinite = 유한수인지 판단하는 함수

console.log(Number.parseInt("123.123")); // parseInt = 숫자만 출력

console.log(Number.parseFloat("1.25em")); // parseFloat = 소숫점 출력