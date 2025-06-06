import { createBrowserRouter } from "react-router-dom";

// Production Pages
import Home from "./../pages/Home/Home";
import CharacterProfile from "./../pages/CharacterProfile/CharacterProfile";
// Developemnt Pages
import HomeDev from "./../pages/Home/Home.dev";
import CharacterProfileDev from "./../pages/CharacterProfile/CharacterProfile.dev";

// Define developement & production routes
const devRoutes = [
  {
    path: "/",
    element: <HomeDev />,
  },
  {
    path: "/character-profile",
    element: <CharacterProfileDev />,
  },
];
const prodRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character-profile",
    element: <CharacterProfile />,
  },
  {
    path: "/character/:characterName",
    element: <CharacterProfile />,
  },
];

// Conditionally select appropriate routes
const isDev = import.meta.env.MODE === "development";
const routes = isDev ? devRoutes : prodRoutes;

const router = createBrowserRouter(routes);

export default router;
