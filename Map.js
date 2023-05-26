let map = new Map();

map.set("name","jhon"); // set => 추가 key => value 형식으로 표현
map.set(123,456);
map.set(true,"bool_type");
console.log(map);

console.log(map.get(123)); // get() => key값을 매개변수로 입력하면 그 key값의 value값을 가져온다.
map.delete(123); // delete() key값을 매개변수로 적고 그 key값 삭제
console.log(map); 
map.clear(); //clear() map 전체삭제
console.log(map); 

let recipe_juice = new Map([
    ["strawberry",50],
    ["banana",100],
    ["ice",50],
]);

for(let item of recipe_juice.keys()){
    console.log(item);
}

let recipe_juice_obj = Object.fromEntries(recipe_juice); //Object.fromEntries(recipe_juice) => obj타입으로 변환
console.log(recipe_juice_obj);

let recipe_juice_kv = Object.entries(recipe_juice_obj); //Object.entries(recipe_juice_obj) => 다시 타입을 key value 형태로 바꿔준다.
console.log(recipe_juice_kv);