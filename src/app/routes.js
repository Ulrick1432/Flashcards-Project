const ROUTES = {
    newQuizRoute: () => "/quizzes/new", //: Returns the path for a route that leads to creating a new quiz. It returns "/quizzes/new".
    quizRoute: (id) => `/quizzes/${id}`,//Takes an id parameter and returns the path for a route that represents a specific quiz. The id parameter is used to construct the path, so for an id value of, say, "123," it would return "/quizzes/123".
    quizzesRoute: () => "/quizzes",
    newTopicRoute: () => "/topics/new",
    topicRoute: (id) => `/topics/${id}`,
    topicsRoute: () => "/topics",
  };
  
  export default ROUTES;
  /*This code defines a JavaScript object named ROUTES, 
  which appears to be a configuration object for defining routes in a web application. 
  Each key in the object corresponds to a named route, 
  and the associated value is a function that returns the path for that route. 
  Let's break down this code to understand its structure:*/