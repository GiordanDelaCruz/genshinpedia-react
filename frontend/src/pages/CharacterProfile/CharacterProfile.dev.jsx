import react from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// Utility function for character images
import getCharacterAssets from "@utils/characterAssets.js";

// Development Components
import NavbarDev from "@components/ui/Navbar/Navbar.dev";
import FooterDev from "@components/ui/Footer/Footer.dev";
import InfoBlockDev from "@components/ui/Character/InfoBlock/InfoBlock.dev";
import StatsTableDev from "@components/ui/Character/StatsTable/StatsTable.dev";
import CharacterSideBarDev from "@components/ui/Character/CharacterSideBar/CharacterSideBar.dev";
import CharacterIntroDev from "@components/ui/Character/CharacterIntro/CharacterIntro.dev";

function CharacterProfileDev() {
  const { state } = useLocation();

  if (!state) return <p>No character data found.</p>;

  // Character Data
  const {
    id: characterId,
    name,
    title,
    vision,
    weapon,
    gender,
    nation,
    affiliation,
    rarity,
    release,
    constellation,
    birthday,
    description,
    skillTalents: [normalAttackData, elementalSkillData, elementalBurstData],
    passiveTalents,
    constellations,
  } = state;

  // Character assets
  const {
    galleryImages,
    characterIcon,
    visionIcon,
    weaponIcon,
    nationIcon,
    skillTalentIcons: {
      normalAttackIcon,
      elementalSkillIcon,
      elementalBurstIcon,
    },
    passiveTalentBaseUrl,
    constellationBaseUrl,
    characterCardUrl,
  } = getCharacterAssets(characterId, vision, weapon, nation);

  // Data and icons for skill talents
  const talentData = [
    {
      id: "normalAttack",
      iconUrl: normalAttackIcon,
      data: normalAttackData,
    },
    {
      id: "elementalSkill",
      iconUrl: elementalSkillIcon,
      data: elementalSkillData,
    },
    {
      id: "elementalBurst",
      iconUrl: elementalBurstIcon,
      data: elementalBurstData,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <NavbarDev isCharacterPage={true} />

      <div className="container my-5 px-4">
        <div className="row">
          {/* Sidebar - shown FIRST on small screens, SECOND on large screens */}
          <div className="col-lg-3 order-1 order-lg-2">
            <CharacterSideBarDev
              rarity={rarity}
              imageUrl={characterCardUrl}
              galleryImages={galleryImages}
              visionUrl={visionIcon}
              weaponUrl={weaponIcon}
              nationUrl={nationIcon}
              gender={gender}
              nation={nation}
              affiliation={affiliation}
              constellation={constellation}
              birthday={birthday}
              release={release}
            />
          </div>

          {/* Intro - shown SECOND on small screens, FIRST on large screens */}
          <div className="col-lg-9 order-2 order-lg-1">
            <CharacterIntroDev
              characterIconUrl={characterIcon}
              visionUrl={visionIcon}
              weaponUrl={weaponIcon}
              nationUrl={nationIcon}
              name={name}
              title={title}
              description={description}
            />

            {/* Load Normal, Skill, & Burst blocks */}
            {talentData.map((talent) => {
              return (
                <>
                  <InfoBlockDev
                    id={talent.id}
                    iconUrl={talent.iconUrl}
                    data={talent.data}
                    vision={vision}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <StatsTableDev
              id={"passiveTalents"}
              iconUrlBase={passiveTalentBaseUrl}
              title={"Passive Talents"}
              arrayData={passiveTalents}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <StatsTableDev
              id={"constellations"}
              iconUrlBase={constellationBaseUrl}
              title={"Constellations"}
              arrayData={constellations}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterDev />
    </>
  );
}

export default CharacterProfileDev;
