function recursive(num) {
    if (num == 0)return 0;

   return num + recursive(num -1);
}

console.log(recursive(3));

// num =3   3 - 1 = 2 + 3 - 2 = 1 + 0 은 리턴 = 총 6이나온다.

function recursiv(num){
    if(num == 0 ) return 1; // 0일때 리턴을 하게되면 곱셈하면 다 0 이나와 1을 리턴해준다.
    return num * recursiv(num -1);
    
}

console.log(recursiv(3));

//재귀함수는 약간 반복문으로 설명이 되지만 그냥 내부에서 계속 돌고 어느순간 브레이크포인트를 줘서 빠져나오게하는 그런함수같다.

