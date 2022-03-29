export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}

//Quotes Reducer
//✓ should return the initial state
//✓ should handle ADD_QUOTE
//✓ should handle REMOVE_QUOTE
//✓ should handle UPVOTE_QUOTE
//✓ should handle DOWNVOTE_QUOTE and decrement vote count down 1 if vote count is positive
//✓ should handle DOWNVOTE_QUOTE and do nothing if vote count is 0