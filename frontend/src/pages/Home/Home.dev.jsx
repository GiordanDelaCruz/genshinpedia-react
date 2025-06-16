// React Components
import CharacterCardDev from "@components/ui/Character/CharacterCard/CharacterCard.dev";
import Intro from "@components/ui/Homepage/Intro";
import NavbarDev from "@components/ui/Navbar/Navbar.dev";
import FooterDev from "@components/ui/Footer/Footer.dev";

// Sample Character Data for Homepage Display
import characters from "@data/characters.js";

// Utility
import chunkArray from "@utils/chunkArray.js";

/**
 * HomeDev Component
 *
 * Renders the landing page of the application.
 * Displays a sample of Genshin Impact character cards in a grid layout.
 *
 * Character data is chunked into rows (4 per row) and rendered dynamically.
 *
 * @component
 * @returns {JSX.Element} Rendered home page content.
 */
function HomeDev() {
  // Group characters into chunks of 4 per row for grid display
  const characterChunks = chunkArray(characters, 4);

  return (
    <>
      {/* Sticky Navbar (non-character page variant) */}
      <NavbarDev isCharacterPage={false} />

      {/* Main Content Container */}
      <div className="container">
        <Intro />

        {/* Sample Characters Section */}
        <div className="bg-dark text-white rounded border shadow px-5 py-4 my-5">
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
          <div className="row bg-light text-black rounded border shadow py-3">
            {characterChunks.map((chunk, idx) => (
              <div key={idx} className="row py-2">
                {chunk.map((char) => (
                  <div key={char.name} className="col-md-3 col-sm-6 col-6">
                    <CharacterCardDev
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
      <FooterDev />
    </>
  );
}

export default HomeDev;
