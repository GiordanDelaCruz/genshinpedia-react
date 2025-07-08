// React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// External Libraries
import axios from "axios";

// Custom CSS
import "./CharacterProfile.css";

// Helper function for generating image and icon URLs based on character data
import getCharacterAssets from "@utils/characterAssets.js";

// Environment Variable for backend API base URL
const BACKEND_API = import.meta.env.VITE_BACKEND_API;

// UI Components
import NavbarDev from "@components/ui/Navbar/Navbar.dev";
import FooterDev from "@components/ui/Footer/Footer.dev";
import InfoBlockDev from "@components/ui/Character/InfoBlock/InfoBlock.dev";
import CharacterSideBarDev from "@components/ui/Character/CharacterSideBar/CharacterSideBar.dev";
import CharacterIntroDev from "@components/ui/Character/CharacterIntro/CharacterIntro.dev";
import LoadingSpinnerDev from "@components/ui/LoadingSpinner/LoadingSpinner.dev";
import PassiveTalentsDev from "@components/ui/Character/PassiveTalents/PassiveTalents.dev";
import ConstellationsDev from "../../components/ui/Character/Constellations/Constellation.dev";

/**
 * CharacterProfileDev Component
 *
 * Displays a detailed profile page for a specific Genshin Impact character.
 * Fetches character data from the backend using the character ID from the URL.
 * Renders the character's introduction, stats, passive talents, constellations,
 * and a sidebar with additional information and images.
 *
 * Uses dynamic routing via `useParams` to determine which character to load.
 *
 * @component
 * @returns {JSX.Element} Rendered character profile page.
 */
function CharacterProfileDev() {
  // Get character ID from the route parameter
  const { id } = useParams();

  // State to store character data, loading status, and error messages
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch character data from backend API when component mounts or ID changes
  useEffect(() => {
    async function fetchCharacterData() {
      try {
        const response = await axios.get(`${BACKEND_API}/characters/${id}`);
        setCharacterData(response.data);
        setError(""); // Clear previous errors
      } catch (err) {
        console.error("Error fetching character data:", err);
        setCharacterData(null);
        setError("Character not found.");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacterData();
  }, [id]);

  // Conditional rendering for loading or error states
  if (loading) return <LoadingSpinnerDev />;
  if (!characterData) return <p>Character not found.</p>;

  // Destructure character metadata for display
  const {
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
  } = characterData;

  // Retrieve character-related image/icons assets
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
  } = getCharacterAssets(id, vision, weapon, nation);

  // Talent data mapped to display sections dynamically
  const talentData = [
    { id: "normalAttack", iconUrl: normalAttackIcon, data: normalAttackData },
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
      {/* Sticky Navbar */}
      <NavbarDev isCharacterPage={true} />

      {/* Main character content container */}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Character Page
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          {/* Sidebar: Character card image, nation, dates */}
          <div className="col-lg-4 order-2 order-lg-2">
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
          {/* Main column: Intro & talents */}
          <div className="d-grid gap-3 col-lg-8 order-1 order-lg-1">
            <CharacterIntroDev
              characterIconUrl={characterIcon}
              visionUrl={visionIcon}
              weaponUrl={weaponIcon}
              nationUrl={nationIcon}
              name={name}
              title={title}
              description={description}
            />

            {/* Skill Talents */}
            <h2 id="skillTalents" className="section-header scroll-target">
              Skill Talents
            </h2>
            {talentData.map((talent) => (
              <InfoBlockDev
                key={talent.id}
                id={talent.id}
                iconUrl={talent.iconUrl}
                data={talent.data}
                vision={vision}
              />
            ))}

            {/* Passive Talents */}
            <div className="row d-grid gap-3 ">
              <h2 id="passiveTalents" className="section-header scroll-target">
                Passive Talents
              </h2>
              <PassiveTalentsDev
                id=""
                iconUrlBase={passiveTalentBaseUrl}
                title="Passive Talents"
                arrayData={passiveTalents}
              />
            </div>

            {/* Constellations */}
            <div className="row d-grid gap-3 ">
              <h2 id="constellations" className="section-header scroll-target">
                Constellations
              </h2>
              <ConstellationsDev
                id=""
                iconUrlBase={constellationBaseUrl}
                title="Constellations"
                arrayData={constellations}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterDev />
    </>
  );
}

export default CharacterProfileDev;
