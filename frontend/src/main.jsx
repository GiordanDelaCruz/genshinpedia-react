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
  {
    path: "/characters/ganyu",
    element: (
      <CharacterProfile
        name={ganyu_data.name}
        title={ganyu_data.title}
        vision={ganyu_data.vision.toLowerCase()}
        weapon={ganyu_data.weapon.toLowerCase()}
        gender={ganyu_data.gender}
        nation={ganyu_data.nation}
        affiliation={ganyu_data.affiliation}
        rarity={ganyu_data.rarity}
        release={ganyu_data.release}
        constellation={ganyu_data.constellation}
        birthday={ganyu_data.birthday}
        description={ganyu_data.description}
        imageName={ganyu_data.name}
        skillTalents={ganyu_data.skillTalents}
        passiveTalents={ganyu_data.passiveTalents}
        constellations={ganyu_data.constellations}
      />
    ),
  },
  {
    path: "/testingPage",
    element: <TestingPage characterData={ganyu_data} />,
  },
  // {
  //   path:"characters/=characterName",
  //   // Need to add axios request to get data
  //   element: <CharacterProfile
  //               name = {props.name}
  //               title = {props.title}
  //               vision = {props.vision.toLowerCase()}
  //               weapon = {props.weapon.toLowerCase()}
  //               gender = {props.gender}
  //               nation = {props.nation}
  //               affiliation = {props.affiliation}
  //               rarity = {props.rarity}
  //               release = {props.release}
  //               constellation = {props.constellation}
  //               birthday = {props.birthday}
  //               description = {props.description}
  //               imageName = {character}
  //               skillTalents = {props.skillTalents}
  //               passiveTalents = {props.passiveTalents}
  //               constellations = {props.constellations}
  //             />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
