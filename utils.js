const { quotes } = require('./data');
const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}
const getQuoteIndexbyId = (arr, id) => {
  return arr.findIndex(quote => quote.id === id);
};
function relabelQuotes() {
  quotes.forEach((quote, index) => (quote.id = index + 1));
}

module.exports = {
  getRandomElement,
  getQuoteIndexbyId,
  relabelQuotes
};
