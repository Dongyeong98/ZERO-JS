let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort());
console.log(nums.reverse());

let ascending_order = function (x, y){
    return x - y;
}

let descending_order = function (x, y){
    return y - x;
}

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));


let ascending_order2 = function (x, y){
    x = x.toUpperCase();
    y = y.toUpperCase();

    if( x > y) return 1;
    else if (y > x ) return -1;
    else return 0;
}

let fruits = ["apple" , "Orange" , "orange" , "melon"];

console.log(fruits.sort(ascending_order2));
console.log(fruits.reverse());
