const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn"); // ✅ button inside the current question
  btn.addEventListener("click", () => {
    // Close other questions
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    // Toggle current question
    question.classList.toggle("show-text");
  });
});
