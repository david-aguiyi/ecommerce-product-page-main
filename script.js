const minus = document.querySelector(".minus");
const counter = document.querySelector(".rcounter");
const btncount = document.querySelectorAll(".btn-counter");
let amt = 0;
function handleAmtBtnClick(e) {
  if (e.currentTarget.id === "minus") {
    amt === 0 ? null : amt--;
  } else {
    amt++;
  }
  counter.textContent = amt;
}

btncount.forEach((b) => b.addEventListener("click", handleAmtBtnClick));
