let array = [
    [101,102,103],
    [201,202,203],
    [301,302,303],
]
console.log(array);
console.log(array[0]);
console.log(array[1][1])

let arr_2 = array.pop();
console.log(array.length);
console.log(arr_2);
console.log(array);

let array_num = array.push([401, 402, 403]);
console.log(array.length);
console.log(array);

for(let i =0; i < array.length; i++){
    for(let j=0; j<array[i].length; j++){
        console.log(array[i][j]);
    }
}

let fruits = [
    ["딸기" , 50],
    ["바나나",20],
    ["멜론",10],
];

for (let i = 0; i < fruits.length; i++){
    console.log(`fruits : ${fruits[i][0]}, amount : ${fruits[i][1]} `);
}
