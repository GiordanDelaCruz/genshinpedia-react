import React from "react";
import ReactDOM from "react-dom/client";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React Components
import Home from "./pages/Home/Home.jsx";
import CharacterProfile from "./pages/CharacterProfile/CharacterProfile.jsx";
import CharacterProfileTest from "./pages/CharacterProfile/CharacterProfile.test.jsx";
import TestingPage from "./pages/TestingPage/TestingPage.jsx";

// Test Data
import ganyu_data from "./../test-data/character-info.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character-profile",
    element: <CharacterProfileTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
