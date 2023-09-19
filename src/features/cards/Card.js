import React, { useState } from "react";
import { useSelector } from "react-redux"; //is imported from "react-redux" to access data from the Redux store.
import { selectCardById } from "./cardsSlice";
// import selector

export default function Card({ id }) {
  const card = useSelector(selectCardById(id)); //useSelector hook to retrieve the card data associated with the provided id by calling the selectCardById selector
  const [flipped, setFlipped] = useState(false);

  return (
    /*The button's text content is determined by the flipped state. If flipped is true, 
    it displays card.back, which is the back side of the card. 
    If flipped is false, it displays card.front, which is the front side of the card.
    When the button is clicked (onClick event handler), it toggles the flipped state by calling setFlipped(!flipped). 
    This toggles between showing the front and back sides of the card.*/
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

/*Overall, this component is designed to display a card's front and back sides and allows the user to toggle between them by clicking the card. 
The card's data is obtained from the Redux store using the useSelector hook and the provided id.*/