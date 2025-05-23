import react from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// React Components
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

// Testing Components
import CharacterInfoBlockTest from "../../components/ui/Character/InfoBlock/InfoBlock.test.jsx";
import CharacterInfoTableTest from "../../components/ui/Character/StatsTable/StatsTable.test.jsx";
import CharacterSideBarTest from "../../components/ui/Character/CharacterSideBar/CharacterSideBar.test.jsx";
import CharacterIntroTest from "../../components/ui/Character/CharacterIntro/CharacterIntro.test.jsx";
import Carousel from "../../components/ui/Carousel/Carousel.jsx";

function CharacterProfileTest() {
  const { state } = useLocation();

  if (!state) return <p>No character data found.</p>;

  const name = state.name;
  const title = state.title;
  const vision = state.vision.toLowerCase();
  const weapon = state.weapon.toLowerCase();
  const gender = state.gender;
  const nation = state.nation;
  const affiliation = state.affiliation;
  const rarity = state.rarity;
  const release = state.release;
  const constellation = state.constellation;
  const birthday = state.birthday;
  const description = state.description;

  const skillTalents = state.skillTalents;

  const normalAttack = skillTalents[0];
  const elementalSkill = skillTalents[1];
  const elementalBurst = skillTalents[2];
  const passiveTalents = state.passiveTalents;
  const constellations = state.constellations;

  // TODO: Get image links in here
  const galleryImages = [
    `https://genshin.jmp.blue/characters/${name.toLowerCase()}/card/`,
    `https://genshin.jmp.blue/characters/${name.toLowerCase()}/gacha-card`,
    `https://genshin.jmp.blue/characters/${name.toLowerCase()}/namecard-background`,
    `https://genshin.jmp.blue/characters/${name.toLowerCase()}/gacha-splash`,
  ];

  const characterIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/icon`;
  const visionUrl = `https://genshin.jmp.blue/elements/${vision}/icon/`;
  const weaponUrl = `/images/${weapon}.webp`;
  const nationUrl = `https://genshin.jmp.blue/nations/${nation.toLowerCase()}/icon`;
  const normalAttackIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-na`;
  const elementalSkillIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-skill`;
  const elementalBurstIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-burst`;
  const passiveTalentIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/talent-passive-`;
  const constellationIconUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/constellation-`;
  const characterCardUrl = `https://genshin.jmp.blue/characters/${name.toLowerCase()}/card/`;

  return (
    <>
      {/* Navbar */}
      <Navbar isCharacterPage={true} />

      <div className="container my-5 px-4">
        <div className="">
          {/* <Carousel galleryImages={galleryImages} /> */}
        </div>
        <div className="row">
          <div className="col-lg-9">
            <CharacterIntroTest
              characterIconUrl={characterIconUrl}
              visionUrl={visionUrl}
              weaponUrl={weaponUrl}
              nationUrl={nationUrl}
              name={name}
              title={title}
              description={description}
            />
            <CharacterInfoBlockTest
              id={"normalAttack"}
              iconURL={normalAttackIconUrl}
              skillTalent={normalAttack}
              vision={vision}
            />
            <CharacterInfoBlockTest
              id={"elementalSkill"}
              iconURL={elementalSkillIconUrl}
              skillTalent={elementalSkill}
              vision={vision}
            />
            <CharacterInfoBlockTest
              id={"elementalBurst"}
              iconURL={elementalBurstIconUrl}
              skillTalent={elementalBurst}
              vision={vision}
            />
          </div>
          <div className="col-lg-3">
            <CharacterSideBarTest
              rarity={rarity}
              imageUrl={characterCardUrl}
              galleryImages={galleryImages}
              visionUrl={visionUrl}
              weaponUrl={weaponUrl}
              nationUrl={nationUrl}
              gender={gender}
              nation={nation}
              affiliation={affiliation}
              constellation={constellation}
              birthday={birthday}
              release={release}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <CharacterInfoTableTest
              id={"passiveTalents"}
              iconUrl={passiveTalentIconUrl}
              title={"Passive Talents"}
              arrayData={passiveTalents}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <CharacterInfoTableTest
              id={"constellations"}
              iconUrl={constellationIconUrl}
              title={"Constellations"}
              arrayData={constellations}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default CharacterProfileTest;
