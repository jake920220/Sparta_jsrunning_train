// 1. 빈칸 채우기 문제
let uninitialized;
console.log(uninitialized); // 결과값 < uninitialized >


2. < 빈칸 > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 빈칸 >


4. 
let mySchedule = "";
console.log(mySchedule || false); // < 빈칸 >
console.log(!!mySchedule); // < 빈칸 >



// 2. 객체 선언해보기
const hongseungwoo = {
    // 조건을 충족하는 코드 작성
    name : "hongseungwoo",
    age : 28,
    mbti : "ISTJ"
    
};

console.log(hongseungwoo.name);
console.log(hongseungwoo.age);
console.log(hongseungwoo.mbti);


// 3. 홀짝 판별기
function 함수명(매개변수) {
    // 코드를 작성해 주세요.
}

console.log(함수명(10)); // 결과값 "짝수";
console.log(함수명(7)); // 결과값 "홀수";

// 4. 계산기 문제
function 함수명(매개변수1, 매개변수2, 매개변수3) {
    // 코드를 작성해주세요.
}

함수명(3, "+", 6); // 결과값 9
함수명(11, "-", 6); // 결과값 5
함수명(6, "*", 3); // 결과값 18
함수명(15, "+", 3); // 결과값 5


// 5. 평균 점수 구하기 
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function 함수명(scores) {
    // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
}

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]