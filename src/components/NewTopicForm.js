import React, { useState } from "react";
import { useDispatch } from "react-redux"; //useDispatch hook for dispatching actions,
import {useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
// import addTopic
import { addTopic } from "../features/topics/topicsSlice";

export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate()

  /*handleSubmit function is called when the form is submitted. It starts by preventing the default form submission behavior.
  It checks if the name input field is not empty. If it's empty, the function returns early, and no action is dispatched.
  If the name is not empty, it dispatches the addTopic action with an object containing the topic's name, a generated id using uuidv4(), and the selected icon.
  After dispatching the action, it uses the navigate function to redirect the user to the topics route using ROUTES.topicsRoute().*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    dispatch(addTopic({ name: name, id: uuidv4(), icon }));
    navigate(ROUTES.topicsRoute());
  };

  /*The return statement renders the form for creating a new topic.
It displays a title ("Create a new topic") and a form that includes an input field for the topic's name and a dropdown (<select>) for choosing an icon.
The value and onChange attributes are used to bind the input field to the name state variable.
The dropdown options are generated based on the available icons defined in ALL_ICONS.
Finally, there's a "Add Topic" button that triggers the form submission when clicked.*/
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center" type="submit">Add Topic</button>
      </form>
    </section>
  );
}

/*
  Overall, this component provides a user interface for creating new topics by entering a name and selecting an icon. Upon submission,
  the topic is added to the Redux store using the addTopic action, and the user is redirected to the topics route.
*/