import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Auth.js";
import Gallery from "./gallery";
import Login from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.jsx";
import { useState, useEffect } from "react";
import SinglePage from "./singlepage.jsx";
import { collection, query } from "firebase/firestore";
import store from "./firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const [user] = useAuthState(auth);
  const [singlePageState, singlePageStateSetter] = useState("");
  const [activeDetails, activeDetailsSetter] = useState([]);
  const galleryRef = collection(store, "pics");
  const galleryQuery = query(galleryRef);
  const [items, loading] = useCollectionData(galleryQuery);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  })


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
              items={items}
              loading={loading}
            />
          ),
        },
        ...items.map((item) => ({
          path: `/${item.shorthand}`,
          element: <SinglePage details={activeDetails}/>,
        }))
      ],
    },
  ]);

  return <div>{user ? <RouterProvider router={router} /> : <Login />}</div>;
}

export default App;
