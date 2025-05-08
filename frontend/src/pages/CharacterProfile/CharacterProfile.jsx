import react from "react";
import axios from "axios";

// React Components
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

// import CharacterContent from "../components/logic/Character/CharacterContent";
import CharacterSideBar from "../../components/ui/Character/CharacterSideBar/CharacterSideBar.jsx";
import ganyu_data from "../../../test-data/character-info";

// TEMP COMPONENTS
import CharacterIntro from "../../components/ui/Character/CharacterIntro/CharacterIntro.jsx";
import CharacterSkills from "../../components/ui/Character/CharacterSkills/CharacterSkills.jsx";

function CharacterProfile(props) {
  const imageName = ganyu_data.name.toLowerCase();
  const vision = ganyu_data.vision.toLowerCase();

  return (
    <>
      {/* Navbar */}
      <Navbar isCharacterPage={true} />

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9">
            <CharacterIntro
              icon={imageName}
              name={props.name}
              weapon={props.weapon}
              vision={vision}
              title={props.title}
              description={props.description}
            />
            {/* Lood Skill Talants */}
            <CharacterSkills
              name={imageName}
              skillTalents={props.skillTalents}
              passiveTalents={props.passiveTalents}
              constellations={props.constellations}
              vision={vision}
            />
          </div>
          <div className="col-lg-3">
            <CharacterSideBar
              rarity={props.rarity}
              imageName={imageName}
              gender={props.gender}
              nation={props.nation}
              affiliation={props.affiliation}
              constellation={props.constellation}
              birthday={props.birthday}
              release={props.release}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default CharacterProfile;
