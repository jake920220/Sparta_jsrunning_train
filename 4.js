function 함수명(매개변수1, 매개변수2, 매개변수3) {
  const operators = ["+", "-", "*", "/"];

  if (!operators.includes(매개변수2)) return;

  if (매개변수2 === "+") return 매개변수1 + 매개변수3;
  if (매개변수2 === "-") return 매개변수1 - 매개변수3;
  if (매개변수2 === "*") return 매개변수1 * 매개변수3;
  if (매개변수2 === "/") return 매개변수1 / 매개변수3;
}
