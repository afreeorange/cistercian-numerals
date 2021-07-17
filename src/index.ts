import u from "umbrellajs";

const numberChunks = (n: number) => {
  let s = n.toString().split("");
  return s.map((digit, n) => parseInt(digit) * Math.pow(10, s.length - n - 1));
};

const handleInput = ({ target: { value: n } }) => {
  if (!n || n === "") {
    u("#numerals").html("Enter something...");
    return;
  }

  if (n < 1 || n > 9999) {
    u("#numerals").html("Can't do that number...");
    return;
  }

  const chunks = numberChunks(n);
  u("#numerals").html(
    chunks.map((chunk) => `<div data-number="${chunk}"></div>`).join("")
  );
};

(() => {
  document
    .querySelector("input")
    .addEventListener("keyup", (e: any) => handleInput(e));
})();
