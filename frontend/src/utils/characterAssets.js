// Utility function that returns asset URLs for a specific character.
// These assets include icons, gallery images, and base paths for talents and constellations.
function getCharacterAssets(characterId, vision, weapon, nation) {
  const baseUrl = `https://genshin.jmp.blue/characters/${characterId}`;

  // Full URLs for fixed icon images
  const visionIcon = `https://genshin.jmp.blue/elements/${vision.toLowerCase()}/icon/`;
  const nationIcon = `https://genshin.jmp.blue/nations/${nation.toLowerCase()}/icon`;
  const weaponIcon = `/images/${weapon.toLowerCase()}.webp`;

  return {
    // Character gallery images (can be used in a carousel)
    galleryImages: [
      `${baseUrl}/card/`,
      `${baseUrl}/gacha-card`,
      `${baseUrl}/namecard-background`,
      `${baseUrl}/gacha-splash`,
    ],

    // Single icons
    characterIcon: `${baseUrl}/icon`,
    visionIcon,
    weaponIcon,
    nationIcon,

    // Skill talent icons (normal attack, elemental skill, elemental burst)
    skillTalentIcons: {
      normalAttackIcon: `${baseUrl}/talent-na`,
      elementalSkillIcon: `${baseUrl}/talent-skill`,
      elementalBurstIcon: `${baseUrl}/talent-burst`,
    },

    // Base URLs (require index or level to complete)
    passiveTalentBaseUrl: `${baseUrl}/talent-passive-`, // e.g., .../talent-passive-0
    constellationBaseUrl: `${baseUrl}/constellation-`,  // e.g., .../constellation-1

    // Character card (can be reused)
    characterCardUrl: `${baseUrl}/card/`,
  };
}

export default getCharacterAssets;