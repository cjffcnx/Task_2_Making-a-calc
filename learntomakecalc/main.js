document.addEventListener('DOMContentLoaded', function() {
  // Selecting the buttons
  const buttons = document.querySelectorAll('.btn');
  const screen = document.querySelector('.calculator-screen');
  let screenValue = "";

  // Loop through all buttons
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
          const buttonText = buttons[i].textContent;

          // Handling different button clicks
          if (buttonText === 'C') {
            // clear the screen
              screenValue = ""; 
          } else if (buttonText === 'DEL') {
            // Remove last character
              screenValue = screenValue.slice(0, -1); 
          } else if (buttonText === '=') {
              try {
                // Evaluate the expression
                  screenValue = eval(screenValue); 
              } catch (e) {
                  screenValue = "Error"; 
              }
          } else {
              screenValue += buttonText; 
          }
          screen.value = screenValue;
      });
  }
});
