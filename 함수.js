function print_add(x , y = 10){
    console.log(x + y);
}

//print_add(10,20);
print_add(30); //기본값으로 x,y=10 으로 설정해줘서 30+10 으로 40으로 결과값이 나온다.


//artuments를 이용해서 매개변수 없이 연산이 가능하다.
//arguments = '0': 10, '1': 20  결과값 출력
function print_min(){
    console.log(arguments[0] - arguments[1])
}

print_min(10,20);

function add(x , y){
    return x + y ;
    console.log("hello") // return 뒤에 있는 건 호출되지않는다. return이 break 역할을 한것이다.
}

let result = add(10,40);
console.log(result);

function cheakAge(age){
    if(age >=18) return true;
    else return false;
}

console.log(cheakAge(20));
console.log(cheakAge(14));