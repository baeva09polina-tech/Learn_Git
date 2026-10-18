const title = document.getElementById("title");
const updateTitleButton = document.getElementById("update-title");

updateTitleButton.addEventListener("click", () => {
  title.textContent = "You have clicked the button.";
});
  