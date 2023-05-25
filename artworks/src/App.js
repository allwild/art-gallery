import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Auth.js";
import Gallery from "./gallery";
import Login from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.jsx";
import { useState, useEffect } from "react";
import SinglePage from "./singlepage.jsx";

function App() {
  const [user] = useAuthState(auth);
  const [singlePageState, singlePageStateSetter] = useState("");
  const [activeDetails, activeDetailsSetter] = useState([]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Gallery
              pageSetter={singlePageStateSetter}
              page={singlePageState}
              user={user}
              setDetails={activeDetailsSetter}
            />
          ),
        },
        {
          path: `/${singlePageState}`,
          element: <SinglePage page={singlePageState} details={activeDetails}/>,
        },
      ],
    },
  ]);

  return <div>{user ? <RouterProvider router={router} /> : <Login />}</div>;
}

export default App;
