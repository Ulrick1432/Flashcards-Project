import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload; // It takes the current state and an action as parameters, extracts the id from the action's payload
      state.cards[id] = action.payload; //adds the new card to the cards object in the state using the id as the key.
    }
  }
});

export const { addCard } = cardsSlice.actions; //This line extracts the addCard action from the cardsSlice and exports it. Actions are functions that dispatch actions to modify the Redux store's state.

/*This code defines a selector function named selectCardById. Selectors are functions used to retrieve specific pieces of state from the Redux store.
selectCardById takes an id parameter and returns a function that accepts the Redux state as its argument. When this returned function is called with the state,
 it retrieves the card with the specified id from the cards slice of the state.*/
export const selectCardById = (id) => (state) => state.cards.cards[id];

//This line exports the reducer created by the createSlice function. The reducer is responsible for handling actions related to the "cards" slice of the state.
export default cardsSlice.reducer;

/*In summary, this code defines a Redux slice for managing a collection of cards. 
It includes a reducer (addCard) for adding cards to the state and a selector (selectCardById) for retrieving cards by their IDs.
The code also exports the actions and reducer, making them available for use in other parts of the Redux store and application.*/