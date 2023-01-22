const shapes = document.querySelectorAll(".shape");
const iconsList = document.querySelectorAll("li");
const shapesText = document.querySelectorAll(".text");

iconsList.forEach((icon) =>
  icon.addEventListener("click", function () {
    shapes.forEach((s) => {
      s.classList.add("hidden");
    });
    shapesText.forEach((st) => {
      st.classList.add("hidden");
    });

    document
      .querySelector(`.shape--${icon.dataset.iconNumber}`)
      .classList.remove("hidden");
    document
      .querySelector(`.text__shape--${icon.dataset.iconNumber}`)
      .classList.remove("hidden");
  })
);
