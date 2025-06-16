// React Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// External Libraries
import axios from "axios";

// Helper function for generating image and icon URLs based on character data
import getCharacterAssets from "@utils/characterAssets.js";

// Environment Variable for backend API base URL
const BACKEND_API = import.meta.env.VITE_BACKEND_API;
console.log(`Backend API: ${BACKEND_API}`);
// UI Components
import Navbar from "@components/ui/Navbar/Navbar";
import Footer from "@components/ui/Footer/Footer";
import InfoBlock from "@components/ui/Character/InfoBlock/InfoBlock";
import StatsTable from "@components/ui/Character/StatsTable/StatsTable";
import CharacterSideBar from "@components/ui/Character/CharacterSideBar/CharacterSideBar";
import CharacterIntro from "@components/ui/Character/CharacterIntro/CharacterIntro";

/**
 * CharacterProfile Component
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
function CharacterProfile() {
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
  if (loading) return <p>Loading...</p>;
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
      <Navbar isCharacterPage={true} />

      {/* Main character content container */}
      <div className="container my-5 px-4">
        <div className="row">
          {/* Sidebar: Character card image, nation, dates */}
          <div className="col-lg-3 order-1 order-lg-2">
            <CharacterSideBar
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
          <div className="col-lg-9 order-2 order-lg-1">
            <CharacterIntro
              characterIconUrl={characterIcon}
              visionUrl={visionIcon}
              weaponUrl={weaponIcon}
              nationUrl={nationIcon}
              name={name}
              title={title}
              description={description}
            />

            {/* Dynamic talent sections */}
            {talentData.map((talent) => (
              <InfoBlock
                key={talent.id}
                id={talent.id}
                iconUrl={talent.iconUrl}
                data={talent.data}
                vision={vision}
              />
            ))}
          </div>
        </div>

        {/* Passive talents table */}
        <div className="row">
          <div className="col-lg-12">
            <StatsTable
              id="passiveTalents"
              iconUrlBase={passiveTalentBaseUrl}
              title="Passive Talents"
              arrayData={passiveTalents}
            />
          </div>
        </div>

        {/* Constellations table */}
        <div className="row">
          <div>
            <StatsTable
              id="constellations"
              iconUrlBase={constellationBaseUrl}
              title="Constellations"
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

export default CharacterProfile;
