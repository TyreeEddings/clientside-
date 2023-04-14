const select = document.querySelector('#language-select');
const output = document.querySelector('#output');

select.addEventListener('change', (event) => {
  const language = event.target.value;
  let message;

  if (language === 'Espresso') {
    message = 'Someone that orders an espresso is quite adventurous and powerful. Strong in character, who knows what they want and not afraid to ask for it. ';
  } else if (language === 'Cappuccino') {
    message = 'People who order a cappuccino are slightly more adventurous than latte drinkers, as they’re looking for a bit more and could be considered more fun.';
  } else if (language === 'Iced coffee') {
    message = 'Although quite refreshing during the summer, when the winter weather kicks in, people that would order an iced coffee, I would say, are misfits in the best possible sense.';
  } else if (language === 'Latte') {
    message = 'Those that drink lattes are more middle of the road types of people that may even consider themselves real connoisseurs of coffee. They just want something simple to drink without complication.';
  } 
   else if (language === 'Mocha') {
    message = 'It is probably the most Instagram-friendly hot drink, so people that order this are likely to be very extroverted, outgoing, flamboyant, and potentially quite loud.';
  }
   else if (language === 'Black') {
    message = 'A person who drinks black coffee tends to be quite single-minded. Some black coffee drinkers may be very fitness orientated, with an Americano being a well-known low-calorie order. This can mean that this person is a determined, focused and driven individual that looks after themselves; making them self-sufficient and empowered';
  }
  else {
    message = 'Please select a flavor from the list.';
  }

 
  
  
  output.textContent = message;
});

 // Get the form element and the selections div
      const form = document.querySelector('form');
      const selectionsDiv = document.querySelector('#selections');

      // Create an empty array to store the selections
      let selections = [];

      // Add an event listener to the form
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from submitting

        // Get all the selected checkboxes
        const checkboxes = document.querySelectorAll('input[name="coffee"]:checked');

        // Loop through the checkboxes and add their values to the selections array
        selections = [];
        checkboxes.forEach((checkbox) => {
          selections.push(checkbox.value);
        });

        // Display the selections in the selections div
        selectionsDiv.textContent = selections.join(', ');
      });

      // Add event listeners to the checkboxes to update the selections array when a checkbox is deselected
      const checkboxInputs = document.querySelectorAll('input[name="coffee"]');
      checkboxInputs.forEach((input) => {
        input.addEventListener('change', () => {
          if (!input.checked) {
            // If the checkbox is deselected, remove its value from the selections array
            selections = selections.filter((value) => {
              return value !== input.value;
            });

            // Display the updated selections in the selections div
            selectionsDiv.textContent = selections.join(', ');
          }
        });
      });

      // Add code to convert the selections array to a string and display it
      const selectionsString = JSON.stringify(selections);
      console.log(selectionsString);
