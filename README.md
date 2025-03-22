# FAQ Accordion

![Design preview for the FAQ accordion coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋


## The challenge

Challenge was to build out this FAQ accordion and get it looking as close to the design as possible.

Requirements:
- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

- White: hsl(0, 0%, 100%)
- Light pink: hsl(275, 100%, 97%)
- Grayish purple: hsl(292, 16%, 49%)
- Dark purple: hsl(292, 42%, 14%)
- Light purple:hsl(292, 16%, 66.67%);



### Body Copy

- Font size :  0.875rem;

### Font

- Family: [Work Sans](https://fonts.google.com/specimen/Work+Sans)
- Weights: 400, 600, 700

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question, index) => {
    //loops through each 'question' element
    const answer = document.getElementById(`answer${index + 1}`);
        // This gets the corresponding 'answer' element by its ID, which is assumed to be in the format 'answer1', 'answer2', etc.

    const icon = question.querySelector('.toggle-icon');
    // This selects the '.toggle-icon' element within the current 'question' element.
    const toggleAnswer = () => {
          // This function toggles the display of the answer and the icon.
      if (answer.style.display === 'none') {
        // if the current answer is hidden 
        answer.style.display = 'block';
        //set display to block and show
        icon.src = '/assets/images/icon-minus.svg'; // Change to minus icon
      } else {
        //if the answer is currently shown
        answer.style.display = 'none';
        //hide it
        icon.src = '/assets/images/icon-plus.svg'; // Change to plus icon
      }
    };

    // Swaps the icon and shows the answer when clicked
    question.addEventListener('click', toggleAnswer);
    // This adds a click event listener to the 'question' element that calls the 'toggleAnswer' function.
    question.addEventListener('keydown', (event) => {
        //if the enter key is pressed
      if (event.key === 'Enter') {
        toggleAnswer();
        //call the toggleAnswer function
      }
    });
  });
});

## Solution

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


