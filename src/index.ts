import u from "umbrellajs";

const numberChunks = (n: number) => {
  let s = n.toString().split("");
  return s.map((digit, n) => parseInt(digit) * Math.pow(10, s.length - n - 1));
};

const handleInput = ({ target: { value: n } }) => {
  if (!n || n === "") {
    u("small").html("Enter something...");
    u("#numerals").html("");
    return;
  }

  if (n < 1 || n > 9999) {
    u("small").html("Can't do that number...");
    u("#numerals").html("");
    return;
  }

  const chunks = numberChunks(n);
  u("small").html("");
  u("#numerals").html(
    chunks.map((chunk) => `<div data-number="${chunk}"></div>`).join("")
  );
};

(() => {
  document
    .querySelector("input")
    .addEventListener("keyup", (e: any) => handleInput(e));

  document
    .querySelector("input[name='flipped']")
    .addEventListener("change", () => {
      u("#numerals").toggleClass("flipped");
    });
})();
