let str = "hello";

//개별 문자열 접근
console.log(str.charAt(1));
console.log(str.charCodeAt(1))
console.log(str[0]);

let text = "hello, world!!!";

console.log(text.indexOf("l"));
console.log(text.indexOf("l",3));
console.log(text.lastIndexOf("l"));

console.log(text.includes("hello"));

//문자열 치환
let txt = "hello_ world!!!";
let changed_txt = "";

changed_txt = text.replace("world" , "earth");
console.log(changed_txt);

console.log(text.replace("!","?")); //앞에 있는 문자만 변경된다.

console.log(text.replace(/l/g,"i")); //전부다 변경된다. 정규표현식

//문자열 추출
 console.log(txt.slice(0,5));
 console.log(txt.slice(4,5));
 console.log(txt.slice(4));

 console.log(txt.substring(0,5));

 let fruits = "apple banana melon";

 result = fruits.split(" "); // split = 배열로 저장

 console.log(result);
 console.log(result[0]);
