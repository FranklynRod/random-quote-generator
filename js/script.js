/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * A Quotes array containing objects with quotes, source, citation, tag and year of quote.
 
***/
const quotes = [
  {
    quote:'Cooking is love made visible',
    source: 'Anonymous',
    citation: 'theknot.com',
    tags: 'historical',
    year: 'unknown',
    countryOfOrigin: 'unknown'
  },

  { quote:'Let food be thy medicine and medicine be thy food',
    source: 'Hippocrates',
    citation: 'www.theknot.com',
    tags: 'inspirational',
    year: 460,
    countryOfOrigin: 'Greece'
  },

  { quote:'People who love to eat are always the best people.',
  source: 'Julia Child',
  citation: 'wwww.sciencedirect.com',
  tags: 'funny',
  year: 1943,
  countryOfOrigin: 'United States'
 },

  { quote:'If you really want to make a friend, go to someones house and eat with him... the people who give you their food give you their heart',
  source: 'Cesar Chavez',
  citation: 'www.brainyquote.com',
  tags: 'historical',
  year: 1950,
  countryOfOrigin: 'United States'
 },

  { quote:'Life is uncertain. Eat dessert first.',
  source: 'Ernestine Ulmer',
  citation: 'www.knot.com',
  tags: 'funny',
  year: 1966,
  countryOfOrigin: 'United States'
}
];


/***
 * `getRandomQuote` function that returns a random quote from the above array
***/

const getRandomQuote = (quotes) => {
  //Get random quote store in variable
  const randomQuote = Math.floor(Math.random() * (quotes.length-1)+1);
  // Uses random quote index to return quote object
  return quotes[randomQuote];
};
console.log(getRandomQuote(quotes));




/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);