const ratingBtn = document.querySelectorAll(".rating-element");
const submitBtn = document.querySelector(".submit-btn");
const hero = document.querySelector(".hero");
const successMsg = document.getElementById("msg");
const submitPage = document.getElementById("submit-page");
const ratingContainer = document.getElementById("rating-container");

let clickedButton;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clickedButton = btn.innerHTML;
    successMsg.innerHTML = `you selected ${clickedButton} out of 5`;
    btn.classList.toggle("inactive");
    btn.classList.toggle("active");
    console.log(clickedButton);
  });
});

submitBtn.addEventListener("click", () => {
  submitPage.style.display = "block";
  ratingContainer.style.display = "none";
});


