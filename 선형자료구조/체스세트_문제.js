/* 체스 세트 */

/* user code */
function answer(chess) {
  let result = [];

  //1. 각 index 별로 정해진 숫자 <--- 체스 게임을 하기 위한 기물의 개수
  let refer = [1, 1, 2, 2, 2, 8];

  //2. 각 index 별로 정해진 숫자와 비교해서 계산해서 result에 넣기
  let count = 0;
  for(let i = 0; i < chess.length; i ++) {
    result[count++] = refer[i] - chess[i];
  }
 

  return result;
}

/* main code */
let input = [
  // TC: 1
  [0, 1, 2, 2, 2, 7],

  // TC: 2
  [2, 1, 2, 1, 2, 1],

  // TC: 3
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
