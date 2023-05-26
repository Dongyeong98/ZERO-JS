let date_now = new Date();
console.log(date_now);

let date_ms_1 = new Date(0);
console.log(date_ms_1);

let date_string = new Date("2020-01-01");
console.log(date_string);

// month : 1월(0) ~ 12월(11) 로 표현
let date_params_2 = new Date(Date.UTC(2021, 0,1)); //우리나라 기준으로 UTC설정 해줘야한다.
console.log(date_params_2);

let date = new Date(Date.UTC(2021,0.1));
console.log(date);

console.log(date.getFullYear()); //getFullYear = 연도만 출력
console.log(date.getMonth());
console.log(date.getDay());  // getDay = 요일을 숫자로 반환

// 날짜정보 설정

let date2 = new Date();
console.log(date2);

let my_year = date2.setFullYear(2021,2,4);
console.log(my_year);
console.log(date2);

date2.setHours(date2.getHours()+2);
console.log(date2);

// parse

let ms_pares = Date.parse("2020-03-31T00:00:00.000"); //parse = 밀리세컨드가반환된다.

console.log(ms_pares);
console.log(new Date(ms_pares));

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));