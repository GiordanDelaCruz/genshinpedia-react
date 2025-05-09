import react from "react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import CharacterCard from "../../components/ui/Character/CharcterCard/CharacterCard.jsx";
import Intro from "../../components/ui/Homepage/Intro.jsx";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

import characters1, {
  characters_2,
} from "../../../test-data/character-card.js";

function Home(props) {
  return (
    <div>
      <Navbar isCharacterPage={false} />

      {/* <!-- Character Display --> */}
      <div className="container">
        <Intro />

        {/* //[Part 1]: Render Character Cards */}
        <div className="row py-2">
          {characters1.map((elem, idx) => {
            return (
              <div key={uuidv4()} className="col">
                <CharacterCard name={elem.name} iconUrl={elem.iconUrl} />
              </div>
            );
          })}
        </div>
        <div className="row py-2">
          {/* //[Part 2]: Render Character Cards */}
          {characters_2.map((elem, idx) => {
            return (
              <div key={uuidv4()} className="col">
                <CharacterCard name={elem.name} iconUrl={elem.iconUrl} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
