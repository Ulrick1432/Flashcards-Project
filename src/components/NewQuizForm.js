import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
// import selectors
import { selectTopics } from "../features/topics/topicsSlice";
import { addQuiz } from "../features/quizzes/quizzesSlice";
import { addCard } from "../features/cards/cardsSlice";

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const navigate = useNavigate();
  const topics = useSelector(selectTopics);  // Use the selector to select all the topics in state
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //It checks if the name input field is not empty. If it's empty, the function returns early, and no action is dispatched.
    if (name.length === 0) {
      return;
    }

    const cardIds = [];
    //unique IDs for each flashcard using uuidv4(), dispatches addCard actions for each flashcard, and collects the generated card IDs in the cardIds array.
    cards.forEach((card) => {
      const cardId = uuidv4();
      cardIds.push(cardId);
      dispatch(addCard({ ...card, id: cardId }));
    });

    //generates a unique ID for the quiz itself using uuidv4(), and dispatches an addQuiz action with the quiz's name, topic ID, card IDs, and quiz ID.
    const quizId = uuidv4();
    dispatch(
      addQuiz({
        name: name,
        topicId: topicId,
        cardIds: cardIds,
        id: quizId,
      })
    );

    //navigate function to redirect the user to the quizzes route after successfully creating the quiz.
    navigate(ROUTES.quizzesRoute())
  };

  /*The code allows users to add and remove flashcards dynamically using the addCardInputs and removeCard functions.
Users can input text for the front and back of each flashcard, and this data is stored in the cards state array.*/
  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  };

  /*The return statement renders the form for creating a new quiz.
It includes input fields for the quiz name and topic selection, as well as a section for adding and managing flashcards.
Users can click the "Add a Card" button to add more flashcards dynamically and click "Remove Card" to remove individual flashcards.
The "Create Quiz" button triggers the form submission when clicked.*/
  return (
    <section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button type="submit">Create Quiz</button>
        </div>
      </form>
    </section>
  );
}


/*
  Overall, this component provides a user interface for creating a new quiz with a name, associated topic, and a customizable set of flashcards. 
  Upon submission, the quiz and its associated flashcards are added to the Redux store using Redux actions, and the user is redirected to the quizzes route.
*/