// 빵틀
function FishBread(flavor ,price){
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

//붕어빵
let bread_1 = new FishBread("cream" , 2000);
let bread_2 = new FishBread("redbean" , 1000);
let bread_3 = new FishBread("milk" , 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

//new.target = new와 함께 호출했는지 확인

function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name =name;
}

let result_1 = User("영희");
let result_2 = new User("영희");

console.log(result_1);
console.log(result_2);

