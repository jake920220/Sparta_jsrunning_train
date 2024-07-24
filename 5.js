const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function 함수명(scores) {
  scores.forEach((value, i, arr) => {
    arr[i] = value + 3;
  });
}

함수명(scores);
console.log(scores);
