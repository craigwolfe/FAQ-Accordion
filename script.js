document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question, index) => {
    const answer = document.getElementById(`answer${index + 1}`);
    const icon = question.querySelector('.toggle-icon');
//hide all answers on load
    const toggleAnswer = () => {
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.src = 'https://raw.githubusercontent.com/craigwolfe/FAQ-Accordion/refs/heads/main/assets/images/icon-minus.svg'; // Change to minus icon
      } else {
        answer.style.display = 'none';
        icon.src = 'https://raw.githubusercontent.com/craigwolfe/FAQ-Accordion/328be432bc35ea9c1aa7a1d1441275e72f2cd77d/assets/images/icon-plus.svg'; // Change to plus icon
      }
    };
//swaps the icon and shows the answer when clicked
    question.addEventListener('click', toggleAnswer);
//enter is pressed on the question the answer will toggle
    question.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        toggleAnswer();
      }
    });
  });
});