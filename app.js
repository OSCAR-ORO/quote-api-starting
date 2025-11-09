const express = require('express');
const cors = require('cors');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

app.use(cors());
app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.json({ quote: randomQuote });
});
app.get('/api/quotes', (req, res) => {
  const person = req.query.person;
  if (person) {
    const filteredQuotes = quotes.filter(quote => quote.person === person);
    res.json({ quotes: filteredQuotes });
  } else {
    res.json({ quotes: quotes });
  }
});
app.post('/api/quotes', (req, res) => {
  const newQuote = { quote: req.query.quote, person: req.query.person };  
  if (newQuote.quote && newQuote.person) {
    quotes.push(newQuote);
    res.status(201).json({ quote: newQuote });
  } else {
    res.status(400).json({ error: 'Both quote and person are required.' });
  }
});


// export app for use in main.js and for testing
module.exports = {
  app
};

