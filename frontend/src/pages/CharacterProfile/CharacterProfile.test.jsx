import react from "react";
import axios from "axios";

// React Components
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

// Testing Components
import CharacterInfoBlockTest from "../../components/ui/Character/CharacterInfoBlock/CharacterInfoBlock.test.jsx";

function CharacterProfileTest({ characterData }) {
  const name = characterData.name;
  const title = characterData.title;
  const vision = characterData.vision.toLowerCase();
  const weapon = characterData.weapon.toLowerCase();
  const gender = characterData.gender;
  const nation = characterData.nation;
  const affiliation = characterData.affiliation;
  const rarity = characterData.rarity;
  const release = characterData.release;
  const constellation = characterData.constellation;
  const birthday = characterData.birthday;
  const description = characterData.description;

  const skillTalents = characterData.skillTalents;

  const normalAttack = skillTalents[0];
  const elementalSkill = skillTalents[1];
  const elementalBurst = skillTalents[2];
  const passiveTalents = characterData.passiveTalents;
  const constellations = characterData.constellations;

  const imageName = characterData.name;
  const normalAttackIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-na`;
  const elementalSkillIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-skill`;
  const elementalBurstIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-burst`;

  return (
    <>
      {/* Navbar */}
      <Navbar isCharacterPage={true} />

      <div className="container my-5 px-4">
        <div className="row">
          <CharacterInfoBlockTest
            id={normalAttack}
            iconURL={normalAttackIconUrl}
            skillTalent={normalAttack}
            vision={vision}
          />
          <CharacterInfoBlockTest
            id={elementalSkill}
            iconURL={elementalSkillIconUrl}
            skillTalent={elementalSkill}
            vision={vision}
          />
          <CharacterInfoBlockTest
            id={elementalBurst}
            iconURL={elementalBurstIconUrl}
            skillTalent={elementalBurst}
            vision={vision}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default CharacterProfileTest;
