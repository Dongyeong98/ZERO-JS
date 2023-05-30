// 피보나치 = 전항과 전정항의 합이 지금내 항이다.

let result;

function recursive (number) {
    if (number == 1 || number == 0){
        return number;
    }
    //f (n) = f(n - 1) + f(n - 2)
    return recursive(number - 1) + recursive(number - 2);
}

result = recursive(3);
console.log(result);