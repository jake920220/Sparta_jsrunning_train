// 1. 빈칸 채우기 문제
// let uninitialized;
// console.log(uninitialized); // 결과값 < undefined >
// uninitialized에 대한 값이 정의되지 않은 상태에서 console.log를 통해 출력을 진행하였기 때문이다.

// const apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable
// const 자료형은 상수로써 , 값의 변경이 불가능하다 어떤 경우에도 새로운 값을 할당하지 못한다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열의 자리수는 lotto[0]부터 시작하기에 3의 경우 네번쨰 자리인 19가 출력이 되어진다.

let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
//falsy와 truly한 값의 대한 이해가 필요하다 -> 빈 문자열 , 0, NaN, Null, undefinded 와 같은 값은 falsy한 값이다.

// 2. 객체 선언해보기
const hongseungwoo = {
  // 조건을 충족하는 코드 작성
  name: "hongseungwoo",
  age: 28,
  mbti: "ISTJ",
};

console.log(hongseungwoo.name);
console.log(hongseungwoo.age);
console.log(hongseungwoo.mbti);

// 3. 홀짝 판별기
function isEvenNumber(num) {
  // 코드를 작성해 주세요.
  return num % 2 === 0 ? "짝수" : "홀수";
}

console.log(isEvenNumber(10)); // 결과값 "짝수";
console.log(isEvenNumber(7)); // 결과값 "홀수";

// 4. 계산기 문제
function cal(num1, cal, num2) {
  // 코드를 작성해주세요.
  console.log(eval(`${num1} ${cal} ${num2}`));
  return eval(`${num1} ${cal} ${num2}`);
}

cal(3, "+", 6); // 결과값 9
cal(11, "-", 6); // 결과값 5
cal(6, "*", 3); // 결과값 18
cal(15, "/", 3); // 결과값 5

// 5. 평균 점수 구하기
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
var avg = 0;

function avgFunc(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  for (let i = 0; i < scores.length; i++) {
    scores[i] = cal(scores[i], "+", 3);
    avg += scores[i];
  }
}

avgFunc(scores); // 함수 실행되는 부분이 없어서 추가..

console.log(scores + "반의 평균점수 :" + Math.floor(avg / scores.length));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
