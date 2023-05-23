//함수 선언식
function add_1(x, y) {
    return x + y;
}

//함수 표현식
const add_2 = function (x, y) {return x + y ;}

//화살표 함수
const add_3 = (x, y) => x + y ;

const add_4 = add_1;

console.log(add_4(1, 4));

console.log(add_1 == add_2); //false 주소값이 다르다.
console.log(add_1 == add_4);

// console.log(Object.getOwnPropertyDescriptors(add_1));
// console.log(Object.getOwnPropertyDescriptors(add_2));
// console.log(Object.getOwnPropertyDescriptors(add_3));
// console.log(Object.getOwnPropertyDescriptors(add_4));


let list = ["john" , 27 ,function hello_func(){
    console.log("hello");
    },
];

let obj = {
    name : "john",
    age : 27,
    hello_func(){
        console.log("hello");
    },
};

function hello_func(){console.log("hello")};

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);


let obj1 = {
    name : "dong",
    age  : 26,
    func : hello_func
}

obj1.func();