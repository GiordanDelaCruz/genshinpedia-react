import { v4 as uuidv4 } from "uuid";

// React Components
import CharacterCard from "../../components/ui/Character/CharcterCard/CharacterCard.jsx";
import Intro from "../../components/ui/Homepage/Intro.jsx";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

// Data
import characters from "./../../data/characters.js";

// Utility
import chunkArray from "../../utils/chunkArray.js";

function Home(props) {
  // Load 4 character cards per row
  const characterChunks = chunkArray(characters, 4);
  console.log(characterChunks[0][0]);

  return (
    <>
      <Navbar isCharacterPage={false} />

      {/* <!-- Character Display --> */}
      <div className="container">
        <Intro />

        <div className="bg-dark text-white rounded border shadow px-5 py-4 my-5 ">
          <div className="row">
            <div className="col">
              <h3 className="fw-700 pb-3">
                <img
                  className="character-question-icon"
                  src="images/character-question-2.png"
                  alt=""
                />
                Sample of Characters
              </h3>
            </div>
          </div>

          <div className="row bg-light text-black rounded border shadow py-3">
            {characterChunks.map((chunk, idx) => (
              <div key={idx} className="row py-2">
                {chunk.map((char) => (
                  <div key={char.name} className="col-md-3 col-sm-6 col-6">
                    <CharacterCard name={char.name} iconUrl={char.iconUrl} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
