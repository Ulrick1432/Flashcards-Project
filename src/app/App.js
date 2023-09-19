import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";  //These components are used to set up routing within the application.
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter> {/*provides the routing functionality for the application.*/}
      <Routes> {/*<Routes> component is used to define the routes for the application. It acts as a container for individual route configurations.*/}
      <Route path="/" element={<AppLayout/>}> 
      {/*Each <Route> has a path attribute and an element attribute.
      For example:
      <Route path="/" element={<AppLayout />} />
      This route configuration matches the root path ("/") and renders the <AppLayout /> component when the root path is accessed.
      The element attribute specifies the React component to render when the corresponding route is matched.
      */}
    <Route path="topics" element={<Topics/>}/>
    <Route path="topics/new" element={<NewTopicForm/>}/>
    <Route path="topics/:topicId" element={<Topic/>}/>
    <Route path="quizzes" element={<Quizzes/>}/>
    <Route path="quizzes/new" element={<NewQuizForm/>}/>
    <Route path="quizzes/:quizId" element={<Quiz/>}/>
  </Route>
      </Routes>
    </BrowserRouter>
  )
}
