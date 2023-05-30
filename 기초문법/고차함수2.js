let nums = [1,2,3];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

nums.forEach(function(i){
    console.log(i);
});

let nums2 = [1,2,3,4,5];
let use_for_loop =[];

for(let i=0; i<nums2.length; i++){
    use_for_loop.push(nums2[i] * 2);
}
console.log(use_for_loop);

let use_map = nums2.map(function (i){
    return i *2;
});

console.log(use_map);

//map() = 배열 요소 별 함수 호출 및 결과를 배열로 반환

let users = [
    {name :"bob" , age : 17, job : false},  
    {name :"alice" , age : 20, job : false},  
    {name :"john" , age : 27, job : true},  
]

let find_job = users.find(function(us){
    return us.job == false;
});

console.log(find_job);

let find_age = users.find(function (us){
    return us.age >= 19;
});

console.log(find_age);

//find() => 콜백 함수의 조건을 만족하는 , 단 하나의 값만 반환 true 값만 return 시킨다.

let filter_job = users.filter(function(us){
    return us.job == false;
});

console.log(filter_job);

let filter_age = users.filter(function (us){
    return us.age >= 19;
});
console.log(filter_age);

//filter () = > find() 와 다르게 조건을 만족하는 모든 값 반환

let nums3 = [1,2,3,4,5];
let call_conut = 0;

console.log("result\tvalue\tindex");

let sum = nums3.reduce(function (accumulator , item, index){
    console.log(accumulator, "\t\t", item , "\t\t", index);
    call_conut++;
    return accumulator + item;
},0);
console.log(call_conut);
console.log(sum);