import React from "react";
import { Outlet, NavLink } from "react-router-dom"; //Outlet is used to render child routes, and NavLink is used to create navigation links with active states.
import ROUTES from "./routes";


export default function AppLayout() {
    return (
        <div>
            <nav>
            {/*Navigation Menu: This section creates a navigation menu with links using the <NavLink> component. 
            These links are defined with to attributes that specify the destination routes based on the values from the ROUTES object (e.g., "Topics," "Quizzes," "New Quiz"). 
            When a link is clicked, the associated route will be activated, and the corresponding content will be rendered.*/}
                <ul>
                <li>
                    <NavLink to={ROUTES.topicsRoute()} >
                    Topics
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.quizzesRoute()} >
                    Quizzes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.newQuizRoute()} >
                    New Quiz
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
            {/*The <Outlet /> component is a placeholder for rendering child routes. 
            It allows child routes to be rendered within the layout defined by AppLayout. 
            Child routes are typically defined in a parent route configuration 
            and can be displayed within the <Outlet /> of their parent route.*/}
        </div>
      

    );
}


/*Overall, this code sets up a layout for the application that includes a navigation menu with links. 
The links are created using NavLink, and when clicked, they navigate to different routes specified in the ROUTES object. 
The <Outlet /> component is used to render child routes within this layout. 
This structure is commonly used in applications with complex routing to separate layout components from the actual 
content components.*/