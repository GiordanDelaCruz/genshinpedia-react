// React Router hook for navigation
import { useNavigate } from "react-router-dom";

// Component-specific styles
import "./CharacterCard.css";

function CharacterCardDev({ id, name, iconUrl }) {
  const navigate = useNavigate();

  /**
   * Handles user click on the character card.
   * Navigates to the CharacterProfile page using the character's ID.
   * Displays an alert if the ID is missing or if navigation fails.
   */
  const handleClick = async () => {
    if (!id) return alert("Character ID missing");

    try {
      navigate(`/characters/${id}`);
    } catch (err) {
      console.error("Error navigating to character profile:", err);
      alert("Failed to load character data.");
    }
  };

  return (
    <>
      <div className="text-center zoom" onClick={handleClick}>
        <div className="ellipse">
          <img
            className="character-icon"
            src={iconUrl}
            alt={`A headshot picture of ${name}`}
          />
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
}

export default CharacterCardDev;
