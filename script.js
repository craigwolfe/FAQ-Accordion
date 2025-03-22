document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");
    const icon = question.querySelector(".toggle-icon");
  
    question.addEventListener("click", () => {
      // Toggle display of the answer
      if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.src = "/assets/images/icon-minus.svg"; // Switch to a minus icon
      } else {
        answer.style.display = "none";
        icon.src = "/assets/images/icon-plus.svg"; // Switch back to a plus icon
      }
    });
  });