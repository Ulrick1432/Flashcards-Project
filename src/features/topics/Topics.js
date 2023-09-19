import React from "react";
import { Link } from "react-router-dom"; //Link is imported from "react-router-dom" to create navigation links within the application.
import ROUTES from "../../app/routes";
// import selector
import { useSelector } from "react-redux";  // is imported from "react-redux" to access data from the Redux store.
import { selectTopics } from "./topicsSlice"; //is a selector used to retrieve the topics data from the Redux store.

export default function Topics() {
  // Use the selector to select all the topics in state
  const topics = useSelector(selectTopics);
   

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}

/*
  The component renders a section with the title "Topics."
  It maps over the topics data (likely an object) using Object.values(topics) to iterate through the topics.
  For each topic, it renders an <li> element with a link (<Link>) that points to a specific topic's route using ROUTES.topicRoute(topic.id). 
  It also displays the topic's name, icon, and the number of quizzes associated with it.
  Below the list of topics, there's a "Create New Topic" button that also uses a Link to navigate to the "Create New Topic" route using ROUTES.newTopicRoute().
  Overall, this component is responsible for displaying a list of topics fetched from the Redux store and providing navigation links to view individual topics or create new ones. 
  It's a common pattern in web applications to use React and Redux for managing and displaying data.
*/