// React Components
import CharacterCardxs from "@components/ui/Character/CharacterCard/CharacterCard.dev";
import Intro from "@components/ui/Homepage/Intro";
import Navbarxs from "@components/ui/Navbar/Navbar.dev";
import Footerxs from "@components/ui/Footer/Footer.dev";

// Sample Character Data for Homepage Display
import characters from "@data/characters.js";

// Utility
import chunkArray from "@utils/chunkArray.js";

/**
 * Homexs Component
 *
 * Renders the landing page of the application.
 * Displays a sample of Genshin Impact character cards in a grid layout.
 *
 * Character data is chunked into rows (4 per row) and rendered dynamically.
 *
 * @component
 * @returns {JSX.Element} Rendered home page content.
 */
function Homexs() {
  // Group characters into chunks of 4 per row for grid display
  const characterChunks = chunkArray(characters, 4);

  return (
    <>
      {/* Sticky Navbar (non-character page variant) */}
      <Navbarxs isCharacterPage={false} />

      {/* Main Content Container */}
      <div className="container">
        <Intro />

        {/* Sample Characters Section */}
        <div className="genshin-card-container">
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

          {/* Display characters in rows of 4 */}
          <div className="row">
            {characterChunks.map((chunk, idx) => (
              <div key={idx} className="row py-2">
                {chunk.map((char) => (
                  <div key={char.name} className="col-md-3 col-sm-6 col-6">
                    <CharacterCardxs
                      id={char.id}
                      name={char.name}
                      iconUrl={char.iconUrl}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footerxs />
    </>
  );
}

export default Homexs;
