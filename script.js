const bgBox = document.querySelector(".bg-box");
const bgBtn = document.querySelector(".bg-btn");
const btns = document.getElementsByClassName("btn");

changeColor();
function changeColor() {
  for (let btn of btns) {
    btn.addEventListener("click", function () {
      for(let b of btns){
        b.classList.remove('active');
      }
      this.classList.add("active");
      const getBtnColor = getComputedStyle(this)["backgroundColor"];
      document.body.style.backgroundColor = getBtnColor;
      bgBox.style.backgroundColor = getBtnColor;
      bgBox.nextElementSibling.style.color = getBtnColor;
      bgBtn.style.backgroundColor = getBtnColor;
      bgBtn.previousElementSibling.style.border = `1px solid ${getBtnColor}`;
      bgBtn.previousElementSibling.style.caretColor = `${getBtnColor}`;
      bgBtn.previousElementSibling.previousElementSibling.style.borderColor = `${getBtnColor}`;
      bgBtn.previousElementSibling.previousElementSibling.style.caretColor = `${getBtnColor}`;

    });
  }
}
