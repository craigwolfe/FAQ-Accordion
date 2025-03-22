# FAQ Accordion

![Design preview for the FAQ accordion coding challenge](./assets/images/desktop-preview.jpg)

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
    const answer = document.getElementById(`answer${index + 1}`);
    const icon = question.querySelector('.toggle-icon');
//hide all answers on load
    const toggleAnswer = () => {
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.src = '`${window.location.origin}/${FAQ-Accordion}/assets/images/icon-minus.svg`'; // Change to minus icon
      } else {
        answer.style.display = 'none';
        icon.src = '`${window.location.origin}/${FAQ-Accordion}/assets/images/icon-plus.svg`'; // Change to plus icon
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
```
** I did discover when swapping issues in JavaScript that I had to use the absolute path from Github to correctly fetch the images especially on GitHub Pages. 
** Since GitHub Pages requires absolute paths in JavaScript, construct them dynamically:
```javascript 
const repoName = "faq-accordion"; // Change to your repo name
icon.src = `${window.location.origin}/${repoName}/assets/images/icon-minus.svg`;
```
**This ensures the correct URL is used whether running locally or on GitHub Pages.

## Solution

- [Solution URL](https://www.frontendmentor.io/solutions/faq-accordion-with-javascript-ALvUftnW4t)
- [Live Site URL](https://craigwolfe.github.io/FAQ-Accordion/)


