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
    message = 'Please select a language from the list.';
  }

 
  
  
  output.textContent = message;
});
